"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_tables_enum_1 = require("../../shared/enums/db-tables.enum");
exports.up = function (knex) {
    return knex.schema.createTable(db_tables_enum_1.DB_TABLES.TEAMS, (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.timestamps(true, true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable(db_tables_enum_1.DB_TABLES.TEAMS);
};
//# sourceMappingURL=20250124071927_create_teams_table.js.map