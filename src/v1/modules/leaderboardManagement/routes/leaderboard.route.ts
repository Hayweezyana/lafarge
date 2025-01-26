import express from "express";
import { container } from "tsyringe";
import  LeaderboardController  from "../controller/leaderboard.controller";


const leaderboardController = container.resolve(LeaderboardController);
const router = express.Router();

// Get the full leaderboard
router.get("/leaderboard", leaderboardController.getLeaderboard);

// Get leaderboard details for a specific team
router.get("/:teamId", leaderboardController.getLeaderboardByTeam);

// Update the leaderboard with a new submission
router.post("/update", leaderboardController.updateLeaderboard);

export default router



