import { Knex } from "knex";
import { DB_TABLES } from "../../shared/enums/db-tables.enum";

exports.up = function (knex) {
    return knex.schema.createTable(DB_TABLES.SUBMISSIONS, (table: Knex.TableBuilder) => {
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
    return knex.schema.dropTable(DB_TABLES.SUBMISSIONS);
  };
  