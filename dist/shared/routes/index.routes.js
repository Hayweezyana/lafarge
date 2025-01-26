"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const audit_trail_route_1 = __importDefault(require("../../v1/modules/moduleName/routes/audit-trail.route"));
const app_route_1 = __importDefault(require("../../v1/modules/app/app.route"));
const health_route_1 = __importDefault(require("../../v1/modules/health/health.route"));
const challenge_route_1 = __importDefault(require("../../v1/modules/challengeManagement/routes/challenge.route"));
exports.default = {
    app: app_route_1.default,
    health: health_route_1.default,
    auditTrail: audit_trail_route_1.default,
    challengeManagement: challenge_route_1.default,
};
//# sourceMappingURL=index.routes.js.map