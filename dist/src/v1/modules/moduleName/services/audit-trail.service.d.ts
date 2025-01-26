import { CreateAuditTrail } from "../dtos/create-audit-trail.dto";
import AuditTrailRepo from "../repositories/audit-trail.repo";
declare class AuditTrailService {
    private readonly auditTrailRepo;
    constructor(auditTrailRepo: AuditTrailRepo);
    createAuditTrail(data: CreateAuditTrail): Promise<void | import("../model/audit-trail.model").AuditTrail>;
    getAll(): Promise<any>;
    private handleAuditCreationError;
}
export default AuditTrailService;
