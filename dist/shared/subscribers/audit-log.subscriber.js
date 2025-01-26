"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogSubscriber = void 0;
const events_1 = __importDefault(require("@shared/events"));
const logger_1 = __importDefault(require("@shared/utils/logger"));
const event_dispatch_1 = require("event-dispatch");
const audit_trail_service_1 = __importDefault(require("../../v1/modules/moduleName/services/audit-trail.service"));
const tsyringe_1 = require("tsyringe");
let AuditLogSubscriber = class AuditLogSubscriber {
    constructor() {
        Object.defineProperty(this, "auditTrailService", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.auditTrailService = tsyringe_1.container.resolve(audit_trail_service_1.default);
    }
    async execute(data) {
        logger_1.default.info({ data }, "AuditLogSubscriber: execution");
        this.auditTrailService.createAuditTrail(data);
    }
};
__decorate([
    (0, event_dispatch_1.On)(events_1.default.auditTrail.logActivity),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuditLogSubscriber.prototype, "execute", null);
AuditLogSubscriber = __decorate([
    (0, event_dispatch_1.EventSubscriber)(),
    __metadata("design:paramtypes", [])
], AuditLogSubscriber);
exports.AuditLogSubscriber = AuditLogSubscriber;
//# sourceMappingURL=audit-log.subscriber.js.map