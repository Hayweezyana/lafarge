import SubmissionsRepo from "../repositories/submissions.repo";
import { CreateSubmissions, SubmissionResponse } from "../dtos/submissions.dto";
declare class SubmissionsService {
    private readonly SubmissionsRepo;
    constructor(SubmissionsRepo: SubmissionsRepo);
    createSubmissions(data: CreateSubmissions): Promise<SubmissionResponse>;
    getAllSubmissions(): Promise<any>;
}
export default SubmissionsService;
