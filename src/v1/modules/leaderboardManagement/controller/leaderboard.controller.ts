import { Response, Request } from "express";
import { SuccessResponse } from "@shared/utils/response.util";
import { injectable } from "tsyringe";
import LeaderboardService from "../services/leaderboard-service";

@injectable()
class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  // Fetch the entire leaderboard
getLeaderboard = async (_req: Request, res: Response) => {
const response = await this.leaderboardService.getAll();
res.send(SuccessResponse("Leaderboard fetched successfully", response));
};

  // Fetch leaderboard details for a specific team
  getLeaderboardByTeam = async (req: Request, res: Response) => {
    const team: string = req.params.teamId; // Access the 'team' parameter as a string
	if (!team) {
	  return res.status(400).send(SuccessResponse("Team ID is required", {}));
	}
    const response = await this.leaderboardService.getByTeamId(team);
    if (!response) {
      return res.status(404).send(SuccessResponse("Team not found", {}));
    }
    res.send(SuccessResponse("Team leaderboard details fetched successfully", response));
  };

  // Update leaderboard with a new submission
  updateLeaderboard = async (req: Request, res: Response) => {
	console.log("Incoming request body:", req.body);
    const { team, total_score } = req.body; // Accept 'team' as a string in the request body
	if (!team || typeof team !== "string" || !total_score || typeof total_score !== "number") {
		return res.status(400).send(SuccessResponse("Invalid input", {}));
	  }
    const response = await this.leaderboardService.updateById(team, total_score);
    if (response) {
      res.send(SuccessResponse("Leaderboard updated successfully", response));
    } else {
      res.status(500).send(SuccessResponse("Failed to update leaderboard", {}));
    }
  };
}

export default LeaderboardController;
