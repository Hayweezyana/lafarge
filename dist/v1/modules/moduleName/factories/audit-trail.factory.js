"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuditTrailFactory {
    static createAuditTrail(data) {
        const auditTrail = {};
        auditTrail.actionType = data.actionType;
        auditTrail.activity = data.activity;
        auditTrail.description = String(data.description);
        auditTrail.device = data.device;
        auditTrail.ipAddress = data.ipAddress;
        auditTrail.userId = data.userId;
        auditTrail.os = String(data.os);
        auditTrail.location = String(data.location);
        auditTrail.metaData = data.metaData;
        return auditTrail;
    }
}
exports.default = AuditTrailFactory;
//# sourceMappingURL=audit-trail.factory.js.map