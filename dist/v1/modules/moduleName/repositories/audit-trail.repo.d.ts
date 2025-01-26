import { BaseRepository } from "./base.repo";
import { AuditTrail, IAuditTrail } from "../model/audit-trail.model";
declare class AuditTrailRepo extends BaseRepository<IAuditTrail, AuditTrail> {
    constructor();
}
export default AuditTrailRepo;
