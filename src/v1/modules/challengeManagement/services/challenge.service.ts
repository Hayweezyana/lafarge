import { injectable } from "tsyringe";
import SubmissionsRepo from "../repositories/submission.repo";
import LeaderboardRepo from "../repositories/leaderboard.repo";
import { SubmissionDto } from "../dtos/challenge.dto";
import ChallengeFactory from "../factories/challenge.factory";
import logger from "@shared/utils/logger";
import { 
  SCENERIO_ONE,
  MULTIPLIER 
} 
from "@shared/enums/grade.enum";
import { ISubmission } from "../model/submission.model";
import { ObjectLiteral } from "@shared/types/object-literal.type";
import AppError from "@shared/error/app.error";

@injectable()
class ChallengeService {
	constructor(
		private readonly submissionsRepo: SubmissionsRepo,
		private readonly leaderboardRepo: LeaderboardRepo
	) {}

	async createSubmissions(data: SubmissionDto) {
		const submission = ChallengeFactory.createSubmission(data);

		const existingSubmission = await this.submissionsRepo.findWhere({
			teamNo: data.teamNo,
			sessionId: data.sessionId,
		});

		if (existingSubmission.length > 0) {
			throw new AppError(400, "Team has already submitted for the session");
		}

		const result = await this.submissionsRepo
			.save(submission)
			.catch((error) => {
				logger.error(error);
				throw new Error(error);
			});

		const submissions = await this.submissionsRepo.findWhere({
			sessionId: data.sessionId,
		});

		logger.info("Calculating leaderboard", submissions);
		this.calculateLeaderboard(submissions);

		return ChallengeFactory.readSubmission(result);
	}

	async getLeaderboard(sessionId: number) {
		const submissions = await this.submissionsRepo.findWhere({ sessionId });
		const leaderboards = await this.leaderboardRepo.getAll();

		// Map submissions with leaderboard data
		const leaderboardData = submissions.map((submission) => {
			const leaderboard = leaderboards.find(
				(leaderboard) => leaderboard.submissionId === submission.id
			);

			return {
				totalScore: leaderboard ? leaderboard.totalScore : 0,
				teamName: submission.teamName,
				teamNo: submission.teamNo,
				cost: submission.cost,
				constraint: submission.constraint,
				innovations: submission.innovations,
				scenarioId: submission.scenarioId,
				sessionId: submission.sessionId,
        margin: submission.margin,
			};
		});

		leaderboardData.sort((a, b) => b.totalScore - a.totalScore);

		const result = leaderboardData.map((data, index) => ({
			position: index + 1, // Position starts from 1
			...data,
		}));

		return result;
	}

	calculateLeaderboard(submissions: ISubmission[]) {
		const leaderboardSubmissionData: {
			submissionId: string;
			totalScore: number;
		}[] = [];
		submissions.forEach((submission) => {
			const totalScore = this.calculatePoints(submission);
			leaderboardSubmissionData.push({
				submissionId: submission.id,
				totalScore,
			});
		});

		logger.info("Leaderboard submission data", leaderboardSubmissionData);
		leaderboardSubmissionData.sort((a, b) => b.totalScore - a.totalScore);
		const leaderboard = leaderboardSubmissionData.map((data) => {
			return {
				submissionId: data.submissionId,
				totalScore: Math.round(data.totalScore),
			};
		});

		logger.info("Preparing to save leaderboard", leaderboard);
		leaderboard.forEach(async (data) => {
			const leaderboardData = ChallengeFactory.createLeaderboard(data);
			logger.info("Leaderboard data", leaderboardData);
			await this.leaderboardRepo.save(leaderboardData).catch((error) => {
				logger.error(error);
				throw new Error(error);
			});
		});
	}

	calculatePoints(submission) {
		let totalScore = 0;
		const { cost, constraint, innovations, scenarioId, margin } = submission;

		switch (scenarioId) {
			case 1:
				totalScore = this.calculateScenarioOnePoints(
					cost,
					constraint,
					margin,
					innovations
				);
				break;
		}

		return totalScore;
	}

	calculateScenarioOnePoints(
		cost: number,
		constraint: number,
		margin: number,
		innovations: ObjectLiteral
	) {
		let costPoint = 0;
		let carbonEmmisionPoint = 0;
		const marginPoint = margin * 9.11;

		const innovationPoint = innovations.hasWaterProofing
			? MULTIPLIER.INNOVATION
			: 0;

		if (
			cost >= SCENERIO_ONE.MIN_TOTAL_BUDGET &&
			cost <= SCENERIO_ONE.MAX_TOTAL_BUDGET
		) {
			costPoint = (1 / (1 + 44.9 * cost)) * 300000;
		} else {
			costPoint = 0;
		}

		if (
			constraint >= SCENERIO_ONE.MIN_CARBON_EMISSIONS &&
			constraint <= SCENERIO_ONE.MAX_CARBON_EMISSIONS
		) {
			carbonEmmisionPoint = 1 / ((1 + 6.49 * constraint) * 300000);
		} else {
			carbonEmmisionPoint = 0;
		}

		const totalScore =
			innovationPoint + costPoint + carbonEmmisionPoint + marginPoint;
		return totalScore;
	}
}

export default ChallengeService;