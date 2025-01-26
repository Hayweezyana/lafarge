import { Response, Request } from "express";
import SubmissionsService from "../services/submissions-service";
import LeaderboardService from "../../leaderboardManagement/services/leaderboard-service";
declare class SubmissionsController {
    private readonly submissionsService;
    private readonly leaderboardService;
    constructor(submissionsService: SubmissionsService, leaderboardService: LeaderboardService);
    createSubmission: (req: Request, res: Response) => Promise<void>;
    deleteSubmission: (_req: Request, res: Response) => Promise<void>;
    getAllSubmissions: (_req: Request, res: Response) => Promise<void>;
}
export default SubmissionsController;
