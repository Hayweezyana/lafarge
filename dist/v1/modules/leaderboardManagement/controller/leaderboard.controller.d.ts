import { Response, Request } from "express";
import LeaderboardService from "../services/leaderboard-service";
declare class LeaderboardController {
    private readonly leaderboardService;
    constructor(leaderboardService: LeaderboardService);
    getLeaderboard: (_req: Request, res: Response) => Promise<void>;
    getLeaderboardByTeam: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateLeaderboard: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
export default LeaderboardController;
