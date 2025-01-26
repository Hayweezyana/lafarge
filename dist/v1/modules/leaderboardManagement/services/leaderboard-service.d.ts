import { ILeaderboard } from "../model/leaderboard.model";
import LeaderboardRepo from "../repositories/leaderboard.repo";
declare class LeaderboardService {
    private readonly leaderboardRepo;
    constructor(leaderboardRepo: LeaderboardRepo);
    getAll(): Promise<ILeaderboard[]>;
    getByTeamId(team: string): Promise<ILeaderboard | null>;
    updateById(team: string, score: number): Promise<ILeaderboard | null>;
}
export default LeaderboardService;
