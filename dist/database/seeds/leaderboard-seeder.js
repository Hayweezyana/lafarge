"use strict";
exports.seed = async function (knex) {
    await knex("leaderboard").del();
    const teams = [
        { team: 'blue', total_score: 0 },
        { team: 'red', total_score: 0 },
        { team: 'green', total_score: 0 },
        { team: 'yellow', total_score: 0 },
        { team: 'orange', total_score: 0 },
    ];
    const teamsWithPosition = teams.map((team, index) => ({
        ...team,
        position: index + 1,
    }));
    await knex("leaderboard").insert(teamsWithPosition);
};
//# sourceMappingURL=leaderboard-seeder.js.map