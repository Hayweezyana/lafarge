"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_tables_enum_1 = require("../../shared/enums/db-tables.enum");
exports.up = function (knex) {
    return knex.schema.createTable(db_tables_enum_1.DB_TABLES.LEADERBOARD, (table) => {
        table.uuid("id").primary().defaultTo(knex.fn.uuid());
        table.integer("position").nullable();
        table.uuid("submissionId").notNullable();
        table.integer("totalScore").notNullable();
        table.timestamps(true, true);
        table
            .foreign("submissionId")
            .references("id")
            .inTable(db_tables_enum_1.DB_TABLES.SUBMISSIONS)
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.index("submissionId");
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable(db_tables_enum_1.DB_TABLES.LEADERBOARD);
};
//# sourceMappingURL=20250124071926_create_leaderboard_table.js.map