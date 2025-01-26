"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLeaderboardDto = exports.createLeaderboardDto = void 0;
function createLeaderboardDto(team, total_score = 0) {
    return {
        team,
        total_score,
    };
}
exports.createLeaderboardDto = createLeaderboardDto;
function CreateLeaderboardDto(teams) {
    return teams.map((team) => createLeaderboardDto(team));
}
exports.CreateLeaderboardDto = CreateLeaderboardDto;
//# sourceMappingURL=leaderboard.factory.js.map