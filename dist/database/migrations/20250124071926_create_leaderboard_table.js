"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_tables_enum_1 = require("../../shared/enums/db-tables.enum");
exports.up = function (knex) {
    return knex.schema.createTable(db_tables_enum_1.DB_TABLES.LEADERBOARD, (table) => {
        table.integer("position").notNullable();
        table.string("team").primary();
        table.integer("total_score").notNullable();
        table.timestamps(true, true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable(db_tables_enum_1.DB_TABLES.LEADERBOARD);
};
//# sourceMappingURL=20250124071926_create_leaderboard_table.js.map