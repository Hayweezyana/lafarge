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
const response_util_1 = require("@shared/utils/response.util");
const tsyringe_1 = require("tsyringe");
const audit_trail_service_1 = __importDefault(require("../services/audit-trail.service"));
let AuditTrailController = class AuditTrailController {
    constructor(auditTrailService) {
        Object.defineProperty(this, "auditTrailService", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: auditTrailService
        });
        Object.defineProperty(this, "getAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (res) => {
                const auditTrails = await this.auditTrailService.getAll();
                res.send((0, response_util_1.SuccessResponse)("Operation successful", auditTrails));
            }
        });
    }
};
AuditTrailController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [audit_trail_service_1.default])
], AuditTrailController);
exports.default = AuditTrailController;
//# sourceMappingURL=audit-trail.controller.js.map