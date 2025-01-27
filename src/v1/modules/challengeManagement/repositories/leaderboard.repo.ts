import { injectable } from "tsyringe";
import { BaseRepository } from "./base.repo";
import { Leaderboard } from "../model/leaderboard.model";

@injectable()
class LeaderboardRepo extends BaseRepository<Leaderboard, any> {
	constructor() {
		super(Leaderboard);
	}
}
export default LeaderboardRepo;