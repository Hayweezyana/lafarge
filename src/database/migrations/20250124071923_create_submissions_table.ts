import { Knex } from "knex";
import { DB_TABLES } from "../../shared/enums/db-tables.enum";

exports.up = function (knex) {
  return knex.schema.createTable(DB_TABLES.SUBMISSIONS, (table: Knex.TableBuilder) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.string("teamName").unsigned().notNullable();
    table.string("teamNo").unsigned().notNullable();
    table.integer("cost").notNullable();
    table.integer("constraint").notNullable();
    table.json("innovations").notNullable();
    table.integer("sessionId").notNullable();
    table.integer("scenarioId").notNullable();
    table.timestamps(true, true);
  });
};
  
  exports.down = function (knex) {
    return knex.schema.dropTable(DB_TABLES.SUBMISSIONS);
  };
  