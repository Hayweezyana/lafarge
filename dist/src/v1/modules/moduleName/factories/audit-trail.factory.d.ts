import { CreateAuditTrail } from "../dtos/create-audit-trail.dto";
import { IAuditTrail } from "../model/audit-trail.model";
declare class AuditTrailFactory {
    static createAuditTrail(data: CreateAuditTrail): IAuditTrail;
}
export default AuditTrailFactory;
