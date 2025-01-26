import { Knex } from "knex";
import { DB_TABLES } from "../../shared/enums/db-tables.enum";

exports.up = function (knex) {
    return knex.schema.createTable(DB_TABLES.TEAMS, (table: Knex.TableBuilder) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable(DB_TABLES.TEAMS);
  };
  