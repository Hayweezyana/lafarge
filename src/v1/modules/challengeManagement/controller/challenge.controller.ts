import { Response, Request } from "express";
import { SuccessResponse } from "@shared/utils/response.util";
import { injectable } from "tsyringe";
import ChallengeService from "../services/challenge.service";
import httpStatus from "http-status";

@injectable()
class ChallengeController {
	constructor(private readonly challengeService: ChallengeService) {}

  async createSubmission(req: Request, res: Response) {
    const result = await this.challengeService.createSubmissions(req.body);
    return res.status(httpStatus.OK).send(SuccessResponse("Operation successful", result));
  }

  async getLeaderboard(req: Request, res: Response) {
    const result = await this.challengeService.getLeaderboard(Number(req.params.sessionId));
    return res.status(httpStatus.OK).send(SuccessResponse("Operation successful", result));
  }
}

export default ChallengeController;
