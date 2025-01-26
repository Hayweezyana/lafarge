import { injectable } from "tsyringe";
import { BaseRepository } from "./base.repo";
import { Submission } from "../model/submission.model";
import { Leaderboard } from "../model/leaderboard.model";

@injectable()
class LeaderboardRepo extends BaseRepository<Leaderboard, any> {
	constructor() {
		super(Submission);
	}
}
export default LeaderboardRepo;