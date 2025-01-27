import { injectable } from "tsyringe";
import { BaseRepository } from "./base.repo";
import { Submission } from "../model/submission.model";

@injectable()
class SubmissionsRepo extends BaseRepository<Submission, any> {
	constructor() {
		super(Submission);
	}
}
export default SubmissionsRepo;