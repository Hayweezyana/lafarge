import { injectable } from "tsyringe";
import SubmissionsRepo from "../repositories/submission.repo";
import LeaderboardRepo from "../repositories/leaderboard.repo";
import { SubmissionDto } from "../dtos/challenge.dto";
import ChallengeFactory from "../factories/challenge.factory";
import logger from "@shared/utils/logger";
import { 
  TEAM_NO, 
  SCENERIO_ONE, 
  SCENERIO_TWO, 
  SCENERIO_THREE, 
  SCENERIO_FOUR, 
  SCENERIO_FIVE,
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

		if (submissions.length === TEAM_NO.MAX_TEAM) {
			logger.info("Calculating leaderboard", submissions);
			this.calculateLeaderboard(submissions);
		}

		return ChallengeFactory.readSubmission(result);
	}

	async getLeaderboard(sessionId: number) {
		const submissions = await this.submissionsRepo.findWhere({ sessionId });

    const leaderboards = await this.leaderboardRepo.getAll();

    const result = submissions.map((submission) => {
      const leaderboard = leaderboards.find(
				(leaderboard) => leaderboard.submissionId === submission.id
			);
      return {
				position: leaderboard ? leaderboard.position : 0,
				totalScore: leaderboard ? leaderboard.totalScore : 0,
				teamName: submission.teamName,
        teamNo: submission.teamNo,
        cost: submission.cost,
        constraint: submission.constraint,
        innovations: submission.innovations,
        scenarioId: submission.scenarioId,
        sessionId: submission.sessionId,
			};
    });

    return result.sort((a, b) => a.position - b.position);
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
		//dtermine the position based on the total score
		leaderboardSubmissionData.sort((a, b) => b.totalScore - a.totalScore);
		const leaderboard = leaderboardSubmissionData.map((data, index) => {
			return {
				position: Math.round(index + 1),
				submissionId: data.submissionId,
				totalScore: Math.round(data.totalScore),
			};
		});

    logger.info("Preparing to save leaderboard", leaderboard);
		//save leaderboard
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
		const { cost, constraint, innovations, scenarioId } = submission;

		switch (scenarioId) {
			case 1:
				totalScore = this.calculateScenarioOnePoints(
					cost,
					constraint,
					innovations
				);
				break;
			case 2:
				totalScore = this.calculateScenarioTwoPoints(
					cost,
					constraint,
					innovations
				);
				break;
			case 3:
				totalScore = this.calculateScenarioThreePoints(
					cost,
					constraint,
					innovations
				);
				break;
			case 4:
				totalScore = this.calculateScenarioFourPoints(
					cost,
					constraint,
					innovations
				);
				break;
			case 5:
				totalScore = this.calculateScenarioFivePoints(
					cost,
					constraint,
					innovations
				);
				break;
			default:
				break;
		}

		return totalScore;
	}

	calculateScenarioOnePoints(
		cost: number,
		constraint: number,
		innovations: ObjectLiteral
	) {
		let innovationPoint = 0;
		let costPoint = 0;
		let carbonEmmisionPoint = 0;

		//check for required innovations
		if (
			(SCENERIO_ONE.MUST_HAVE_DURABILITY_SURGE !==
				innovations.hasDurabilitySurge &&
				SCENERIO_ONE.MUST_HAVE_WATER_PROOFING !==
					innovations.hasWaterProofing) ||
			!innovations ||
			!innovations.hasDurabilitySurge ||
			!innovations.hasWaterProofing
		) {
			innovationPoint = innovationPoint * MULTIPLIER.INNOVATION;
		} else {
			innovationPoint = MULTIPLIER.INNOVATION;
		}

		//compute cost point
		if (
			cost >= SCENERIO_ONE.MIN_TOTAL_BUDGET &&
			cost <= SCENERIO_ONE.MAX_TOTAL_BUDGET
		) {
			costPoint = (1 / (1 + 0.1 * cost)) * MULTIPLIER.COST;
		} else {
			costPoint = 0;
		}

		//compute carbon emission point
		if (
			constraint >= SCENERIO_ONE.MIN_CARBON_EMISSIONS &&
			constraint <= SCENERIO_ONE.MAX_CARBON_EMISSIONS
		) {
			carbonEmmisionPoint =
				(1 / (1 + 0.1 * constraint)) * MULTIPLIER.CARBON_EMISSIONS;
		} else {
			carbonEmmisionPoint = 0;
		}
		return innovationPoint + costPoint + carbonEmmisionPoint;
	}

	calculateScenarioTwoPoints(
		cost: number,
		constraint: number,
		innovations: ObjectLiteral
	) {
		let innovationPoint = 0;
		let costPoint = 0;
		let carbonEmmisionPoint = 0;

		//check for required innovations
		if (
			(SCENERIO_TWO.MUST_HAVE_ECO_BOOST !== innovations.hasEcoBoost &&
				SCENERIO_TWO.MUST_HAVE_GREEN_BLEND !== innovations.hasGreenBlend) ||
			!innovations ||
			!innovations.hasEcoBoost ||
			!innovations.hasGreenBlend
		) {
			innovationPoint = innovationPoint * MULTIPLIER.INNOVATION;
		} else {
			innovationPoint = MULTIPLIER.INNOVATION;
		}

		//compute cost point
		if (
			cost >= SCENERIO_TWO.MIN_TOTAL_BUDGET &&
			cost <= SCENERIO_TWO.MAX_TOTAL_BUDGET
		) {
			costPoint = (1 / (1 + 0.1 * cost)) * MULTIPLIER.COST;
		} else {
			costPoint = 0;
		}

		//compute carbon emission point
		if (
			constraint >= SCENERIO_TWO.MIN_CARBON_EMISSIONS &&
			constraint <= SCENERIO_TWO.MAX_CARBON_EMISSIONS
		) {
			carbonEmmisionPoint =
				(1 / (1 + 0.1 * constraint)) * MULTIPLIER.CARBON_EMISSIONS;
		} else {
			carbonEmmisionPoint = 0;
		}
		return innovationPoint + costPoint + carbonEmmisionPoint;
	}

	calculateScenarioThreePoints(
		cost: number,
		constraint: number,
		innovations: ObjectLiteral
	) {
		let innovationPoint = 0;
		let costPoint = 0;
		let carbonEmmisionPoint = 0;

		//check for required innovations
		if (
			(SCENERIO_THREE.MUST_HAVE_SMART_STRENGTH_BLEND !==
				innovations.hasSmartStrengthBlend &&
				SCENERIO_THREE.MUST_HAVE_INDUSTRIAL_GRADE_BOOST !==
					innovations.hasIndustrialGradeBoost) ||
			!innovations ||
			!innovations.hasSmartStrengthBlend ||
			!innovations.hasIndustrialGradeBoost
		) {
			innovationPoint = innovationPoint * MULTIPLIER.INNOVATION;
		} else {
			innovationPoint = MULTIPLIER.INNOVATION;
		}

		//compute cost point
		if (
			cost >= SCENERIO_THREE.MIN_TOTAL_BUDGET &&
			cost <= SCENERIO_THREE.MAX_TOTAL_BUDGET
		) {
			costPoint = (1 / (1 + 0.1 * cost)) * MULTIPLIER.COST;
		} else {
			costPoint = 0;
		}

		//compute carbon emission point
		if (
			constraint >= SCENERIO_THREE.MIN_CARBON_EMISSIONS &&
			constraint <= SCENERIO_THREE.MAX_CARBON_EMISSIONS
		) {
			carbonEmmisionPoint =
				(1 / (1 + 0.1 * constraint)) * MULTIPLIER.CARBON_EMISSIONS;
		} else {
			carbonEmmisionPoint = 0;
		}
		return innovationPoint + costPoint + carbonEmmisionPoint;
	}

	calculateScenarioFourPoints(
		cost: number,
		constraint: number,
		innovations: ObjectLiteral
	) {
		let innovationPoint = 0;
		let costPoint = 0;
		let carbonEmmisionPoint = 0;

		//check for required innovations
		if (
			(SCENERIO_FOUR.MUST_HAVE_AFFORDABLE_MIX !==
				innovations.hasAffordableMix &&
				SCENERIO_FOUR.MUST_HAVE_HOUSING_STRENGTH_BOOST !==
					innovations.hasHousingStrengthBoost) ||
			!innovations ||
			!innovations.hasAffordableMix ||
			!innovations.hasHousingStrengthBoost
		) {
			innovationPoint = innovationPoint * MULTIPLIER.INNOVATION;
		} else {
			innovationPoint = MULTIPLIER.INNOVATION;
		}

		//compute cost point
		if (
			cost >= SCENERIO_FOUR.MIN_TOTAL_BUDGET &&
			cost <= SCENERIO_FOUR.MAX_TOTAL_BUDGET
		) {
			costPoint = (1 / (1 + 0.1 * cost)) * MULTIPLIER.COST;
		} else {
			costPoint = 0;
		}

		//compute carbon emission point
		if (
			constraint >= SCENERIO_FOUR.MIN_CARBON_EMISSIONS &&
			constraint <= SCENERIO_FOUR.MAX_CARBON_EMISSIONS
		) {
			carbonEmmisionPoint =
				(1 / (1 + 0.1 * constraint)) * MULTIPLIER.CARBON_EMISSIONS;
		} else {
			carbonEmmisionPoint = 0;
		}
		return innovationPoint + costPoint + carbonEmmisionPoint;
	}

	calculateScenarioFivePoints(
		cost: number,
		constraint: number,
		innovations: ObjectLiteral
	) {
		let innovationPoint = 0;
		let costPoint = 0;
		let carbonEmmisionPoint = 0;

		//check for required innovations
		if (
			(SCENERIO_FIVE.MUST_HAVE_SMART_STRENGTH_BLEND !==
				innovations.hasSmartStrengthBlend &&
				SCENERIO_FIVE.MUST_HAVE_WEATHER_SHIELD !==
					innovations.hasWeatherShield) ||
			!innovations ||
			!innovations.hasSmartStrengthBlend ||
			!innovations.hasWeatherShield
		) {
			innovationPoint = innovationPoint * MULTIPLIER.INNOVATION;
		} else {
			innovationPoint = MULTIPLIER.INNOVATION;
		}

		//compute cost point
		if (
			cost >= SCENERIO_FIVE.MIN_TOTAL_BUDGET &&
			cost <= SCENERIO_FIVE.MAX_TOTAL_BUDGET
		) {
			costPoint = (1 / (1 + 0.1 * cost)) * MULTIPLIER.COST;
		} else {
			costPoint = 0;
		}

		//compute carbon emission point
		if (
			constraint >= SCENERIO_FIVE.MIN_CARBON_EMISSIONS &&
			constraint <= SCENERIO_FIVE.MAX_CARBON_EMISSIONS
		) {
			carbonEmmisionPoint =
				(1 / (1 + 0.1 * constraint)) * MULTIPLIER.CARBON_EMISSIONS;
		} else {
			carbonEmmisionPoint = 0;
		}
		return innovationPoint + costPoint + carbonEmmisionPoint;
	}
}

export default ChallengeService;