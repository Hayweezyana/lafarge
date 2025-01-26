import { injectable } from "tsyringe";
import { BaseRepository } from "./base.repo";
import { Submissions } from "../model/submissions.model";

@injectable()
class SubmissionsRepository extends BaseRepository<Submissions, any> {
  constructor() {
    super(Submissions);
  }
  
}
export default SubmissionsRepository;