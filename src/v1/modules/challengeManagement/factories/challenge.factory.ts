import { SubmissionDto, LeaderboardDto } from "../dtos/challenge.dto";
import { ISubmission } from "../model/submission.model";
import { ILeaderboard } from "../model/leaderboard.model";

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
		data.createdAt = submission.createdAt;
		data.updatedAt = submission.updatedAt;

		return data;
	}

	static createLeaderboard(data: ILeaderboard) {
		const leaderboard = {} as LeaderboardDto;

		leaderboard.position = data.position;
		leaderboard.submissionId = data.submissionId;
		leaderboard.totalScore = data.totalScore;

		return leaderboard;
	}
}

export default ChallengeFactory;
