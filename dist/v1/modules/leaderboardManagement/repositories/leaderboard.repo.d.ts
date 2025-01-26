import { BaseRepository } from "./base.repo";
import { Leaderboard } from "../model/leaderboard.model";
declare class LeaderboardRepository extends BaseRepository<Leaderboard, any> {
    constructor();
    createLeaderboardEntry(data: Partial<Leaderboard>): Promise<Leaderboard>;
}
export default LeaderboardRepository;
