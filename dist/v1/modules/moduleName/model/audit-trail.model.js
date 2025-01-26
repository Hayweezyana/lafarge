"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditTrail = void 0;
const db_tables_enum_1 = require("@shared/enums/db-tables.enum");
const objection_1 = require("objection");
class AuditTrail extends objection_1.Model {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "userId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ipAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "device", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "actionType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "activity", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaData", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "os", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "location", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "user", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.AuditTrail = AuditTrail;
Object.defineProperty(AuditTrail, "tableName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: db_tables_enum_1.DB_TABLES.AUDIT_TRAILS
});
Object.defineProperty(AuditTrail, "relationMappings", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {}
});
//# sourceMappingURL=audit-trail.model.js.map