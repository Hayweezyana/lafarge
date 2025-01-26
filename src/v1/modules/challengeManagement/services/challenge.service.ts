import { injectable } from "tsyringe";
import SubmissionsRepo from "../repositories/submission.repo";
import { SubmissionDto } from "../dtos/challenge.dto";
import ChallengeFactory from "../factories/challenge.factory";
import logger from "@shared/utils/logger";

@injectable()
class ChallengeService {
  constructor(private readonly SubmissionsRepo: SubmissionsRepo) {}

  async createSubmissions(data: SubmissionDto) {
    const submission = ChallengeFactory.createSubmission(data);
    const result = await this.SubmissionsRepo.save(submission).catch((error) => {
      logger.error(error);
      throw new Error(error);
    });
    return ChallengeFactory.readSubmission(result);
  }
}

export default ChallengeService;