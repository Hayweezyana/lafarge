import { SubmissionDto, LeaderboardDto } from "../dtos/challenge.dto";
import { ISubmission } from "../model/submission.model";
import { ILeaderboard } from "../model/leaderboard.model";
import { ObjectLiteral } from "@shared/types/object-literal.type";

class ChallengeFactory {
	static createSubmission(data: SubmissionDto) {
		const submission = {} as ISubmission;

		submission.teamName = data.teamName;
		submission.teamNo = data.teamNo;
		submission.cost = data.cost;
		submission.constraint = data.constraint;
		submission.innovations = data.innovations;
		submission.sessionId = data.sessionId;
		submission.scenarioId = data.scenarioId;

		return submission;
	}

	static readSubmission(submission: ISubmission) {
		const data = {} as SubmissionDto;

		data.id = submission.id;
		data.teamName = submission.teamName;
		data.teamNo = submission.teamNo;
		data.cost = submission.cost;
		data.constraint = submission.constraint;
		data.innovations = submission.innovations;
		data.sessionId = submission.sessionId;
		data.scenarioId = submission.scenarioId;

		return data;
	}

	static createLeaderboard(data: LeaderboardDto) {
		const leaderboard = {} as ILeaderboard;

		leaderboard.position = data.position;
		leaderboard.submissionId = data.submissionId;
		leaderboard.totalScore = data.totalScore;

		return leaderboard;
	}

	static readLeaderboard(data: LeaderboardDto) {
		const leaderboard = {} as ObjectLiteral;

		leaderboard.position = data.position;
		leaderboard.submissionId = data.submissionId;
		leaderboard.totalScore = data.totalScore;
		leaderboard.teamName = data.teamName;
		leaderboard.teamNo = data.teamNo;
		leaderboard.scenarioId = data.scenarioId;
		leaderboard.sessionId = data.sessionId;

		return leaderboard;
	}
}

export default ChallengeFactory;
