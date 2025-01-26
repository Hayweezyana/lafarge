import { BaseRepository } from "./base.repo";
import { Submissions } from "../model/submissions.model";
declare class SubmissionsRepository extends BaseRepository<Submissions, any> {
    constructor();
}
export default SubmissionsRepository;
