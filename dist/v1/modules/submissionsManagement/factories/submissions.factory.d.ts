import { CreateSubmissions } from "../dtos/submissions.dto";
import { ISubmissions } from "../model/submissions.model";
declare class SubmissionsFactory {
    static createAuditTrail(data: CreateSubmissions): ISubmissions;
}
export default SubmissionsFactory;
