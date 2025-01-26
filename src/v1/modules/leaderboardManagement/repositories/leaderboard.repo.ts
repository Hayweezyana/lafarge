import { injectable } from "tsyringe";
import { BaseRepository } from "./base.repo";
import { Leaderboard } from "../model/leaderboard.model";

@injectable()
class LeaderboardRepository extends BaseRepository<Leaderboard, any> {
  constructor() {
    super(Leaderboard);
  }
  

    async createLeaderboardEntry(data: Partial<Leaderboard>): Promise<Leaderboard> {
    return await this.save(data);
  }
}
export default LeaderboardRepository;