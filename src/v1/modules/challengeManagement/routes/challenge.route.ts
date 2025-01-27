import express from "express";
import { Response, Request } from "express";
import { container } from "tsyringe";
import  ChallengeController  from "../controller/challenge.controller";

const challengeController = container.resolve(ChallengeController);
const router = express.Router();

router.post("/leaderboard/submission", (req: Request, res: Response, next) => {
	challengeController.createSubmission(req, res).catch((e) => next(e));
});

router.get("/leaderboard/:sessionId", (req: Request, res: Response, next) => { 
  challengeController.getLeaderboard(req, res).catch((e) => next(e));
});

export default router;
