"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubmissionsFactory {
    static createAuditTrail(data) {
        const submissions = {};
        submissions.id = data.id;
        submissions.team = data.team;
        submissions.scenarioId = data.scenarioId;
        submissions.cost = data.cost;
        submissions.constraint = data.constraint;
        submissions.innovation = data.innovation;
        submissions.focus = data.focus;
        submissions.score = data.score;
        submissions.createdAt = data.createdAt;
        return submissions;
    }
}
exports.default = SubmissionsFactory;
//# sourceMappingURL=submissions.factory.js.map