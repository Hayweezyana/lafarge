import { Knex } from "knex";
import { DB_TABLES } from "../../shared/enums/db-tables.enum";

exports.up = function (knex) {
    return knex.schema.createTable(DB_TABLES.MATERIALS, (table: Knex.TableBuilder) => {
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
    return knex.schema.dropTable(DB_TABLES.MATERIALS);
  };
  