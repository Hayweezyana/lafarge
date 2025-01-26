"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_tables_enum_1 = require("../../shared/enums/db-tables.enum");
exports.up = function (knex) {
    return knex.schema.createTable(db_tables_enum_1.DB_TABLES.MATERIALS, (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.float("cost_per_unit").notNullable();
        table.float("CO2_per_unit").notNullable();
        table.float("additional_CO2_per_extra").nullable();
        table.float("additional_cost_per_extra").nullable();
        table.float("Clinker").nullable();
        table.float("Limestone").nullable();
        table.float("Gypsum").nullable();
        table.timestamps(true, true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable(db_tables_enum_1.DB_TABLES.MATERIALS);
};
//# sourceMappingURL=20250124071929_create_materials_table.js.map