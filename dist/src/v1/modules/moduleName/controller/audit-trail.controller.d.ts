import AuditTrailService from "../services/audit-trail.service";
declare class AuditTrailController {
    private readonly auditTrailService;
    constructor(auditTrailService: AuditTrailService);
    getAll: (res: any) => Promise<void>;
}
export default AuditTrailController;
