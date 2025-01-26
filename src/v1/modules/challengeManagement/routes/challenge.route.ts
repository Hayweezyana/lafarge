import express from "express";
import { Response, Request } from "express";
import { container } from "tsyringe";
import  ChallengeController  from "../controller/challenge.controller";
import validate from "@shared/middlewares/validator.middleware";
import { createSubmissionRules } from "../validations/challenge.validator";


const challengeController = container.resolve(ChallengeController);
const router = express.Router();

router.post("/leaderboard/submission", validate(createSubmissionRules), (req: Request, res: Response, next) => {
	challengeController.createSubmission(req, res).catch((e) => next(e));
});

router.get("/leaderboard/:sessionId", (req: Request, res: Response, next) => { 
  challengeController.getLeaderboard(req, res).catch((e) => next(e));
});

export default router;
