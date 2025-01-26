import { injectable } from "tsyringe";
import SubmissionsRepo from "../repositories/challenge.repo";
import { CreateSubmissions, SubmissionResponse } from "../dtos/challenge.dto";

@injectable()
class SubmissionsService {
  constructor(private readonly SubmissionsRepo: SubmissionsRepo) {}

  async createSubmissions(data: CreateSubmissions): Promise<SubmissionResponse> {
    const { team, innovation, cost, constraint, focus, } = data;

    // Calculate points based on boolean values
    const score =
      (cost ? 50 : 0) +
      (constraint ? 50 : 0) +
      (innovation ? 50 : 0) +
      (focus ? 50 : 0);

    // Create submission in the repository
    const submission = await this.SubmissionsRepo.save({
      team,
      score,
    });

    return {
      ...submission,
      cost,
      constraint,
      innovation,
      focus,
    };
  }

  async getAllSubmissions() {
    console.log
    const submissions = await this.SubmissionsRepo.getAll();
    return submissions;
  }

  //async getSubmissionsByTeam(teamId: number) {
    //const submissions = await this.SubmissionsRepo.getByTeam(teamId);
    //return submissions;
  //}
}

export default SubmissionsService;
