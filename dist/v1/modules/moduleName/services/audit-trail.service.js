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
const logger_1 = __importDefault(require("@shared/utils/logger"));
const tsyringe_1 = require("tsyringe");
const audit_trail_factory_1 = __importDefault(require("../factories/audit-trail.factory"));
const audit_trail_repo_1 = __importDefault(require("../repositories/audit-trail.repo"));
let AuditTrailService = class AuditTrailService {
    constructor(auditTrailRepo) {
        Object.defineProperty(this, "auditTrailRepo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: auditTrailRepo
        });
        Object.defineProperty(this, "handleAuditCreationError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (auditTrail, error) => {
                logger_1.default.error({ error, auditTrail }, "AuditTrailService[handleAuditCreationError]: Error occured creating audit-trails.");
            }
        });
    }
    async createAuditTrail(data) {
        const auditTrail = audit_trail_factory_1.default.createAuditTrail(data);
        return await this.auditTrailRepo
            .save(auditTrail)
            .catch((error) => this.handleAuditCreationError(auditTrail, error));
    }
    async getAll() {
        return await this.auditTrailRepo.getAll();
    }
};
AuditTrailService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [audit_trail_repo_1.default])
], AuditTrailService);
exports.default = AuditTrailService;
//# sourceMappingURL=audit-trail.service.js.map