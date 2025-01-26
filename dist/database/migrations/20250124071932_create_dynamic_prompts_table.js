"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_tables_enum_1 = require("../../shared/enums/db-tables.enum");
exports.up = function (knex) {
    return knex.schema.createTable(db_tables_enum_1.DB_TABLES.DYNAMIC_PROMPTS, (table) => {
        table.increments("id").primary();
        table.string("prompt").notNullable();
        table.string("type").notNullable();
        table.json("choices").nullable();
        table.json("result_impact").notNullable();
        table.timestamps(true, true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable(db_tables_enum_1.DB_TABLES.DYNAMIC_PROMPTS);
};
//# sourceMappingURL=20250124071932_create_dynamic_prompts_table.js.map