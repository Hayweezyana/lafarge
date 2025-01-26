"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_tables_enum_1 = require("../../shared/enums/db-tables.enum");
exports.up = function (knex) {
    return knex.schema.createTable(db_tables_enum_1.DB_TABLES.SUBMISSIONS, (table) => {
        table.increments("id").primary();
        table.string("team").unsigned().notNullable();
        table.integer("scenario_id").unsigned().notNullable();
        table.boolean("cost").notNullable();
        table.boolean("constraint").notNullable();
        table.boolean("innovation").notNullable();
        table.boolean("focus").notNullable();
        table.integer("score").notNullable();
        table.timestamps(true, true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable(db_tables_enum_1.DB_TABLES.SUBMISSIONS);
};
//# sourceMappingURL=20250124071931_create_submissions_table.js.map