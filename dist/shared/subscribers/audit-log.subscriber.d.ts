import { CreateAuditTrail } from "../../v1/modules/moduleName/dtos/create-audit-trail.dto";
export declare class AuditLogSubscriber {
    private readonly auditTrailService;
    constructor();
    execute(data: CreateAuditTrail): Promise<void>;
}
