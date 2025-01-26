"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const audit_trail_route_1 = __importDefault(require("../../v1/modules/moduleName/routes/audit-trail.route"));
const app_route_1 = __importDefault(require("../../v1/modules/app/app.route"));
const health_route_1 = __importDefault(require("../../v1/modules/health/health.route"));
const leaderboard_route_1 = __importDefault(require("../../v1/modules/leaderboardManagement/routes/leaderboard.route"));
const dynamic_prompts_route_1 = __importDefault(require("../../v1/modules/dynamicPromptsManagement/routes/dynamic_prompts.route"));
const materials_route_1 = __importDefault(require("../../v1/modules/materialsManagement/routes/materials.route"));
const submissions_route_1 = __importDefault(require("../../v1/modules/submissionsManagement/routes/submissions.route"));
const teams_route_1 = __importDefault(require("../../v1/modules/teamsManagement/routes/teams.route"));
exports.default = {
    app: app_route_1.default,
    health: health_route_1.default,
    auditTrail: audit_trail_route_1.default,
    leaderboardManagement: leaderboard_route_1.default,
    teamsManagement: teams_route_1.default,
    dynamicPromptsManagement: dynamic_prompts_route_1.default,
    materialsManagement: materials_route_1.default,
    submissionsManagement: submissions_route_1.default,
};
//# sourceMappingURL=index.routes.js.map