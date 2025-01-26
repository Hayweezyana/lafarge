import { Knex } from "knex";
import { DB_TABLES } from "../../shared/enums/db-tables.enum";

exports.up = function (knex) {
  return knex.schema.createTable(DB_TABLES.LEADERBOARD, (table: Knex.TableBuilder) => {
    table.integer("position").notNullable();
    table.string("team").primary();
    table.integer("total_score").notNullable();
    table.timestamps(true, true);
  });
};
  
exports.down = function (knex) {
  return knex.schema.dropTable(DB_TABLES.LEADERBOARD);
};
  