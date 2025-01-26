"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TeamFactory {
    static createAuditTrail(data) {
        const Team = {};
        Team.name = data.name;
        return Team;
    }
    static readTeam(data) {
        const Team = {};
        Team.name = data.name;
        return Team;
    }
}
exports.default = TeamFactory;
//# sourceMappingURL=teams.factory.js.map