import { Knex } from "knex";
import { DB_TABLES } from "../../shared/enums/db-tables.enum";

exports.up = function (knex) {
    return knex.schema.createTable(DB_TABLES.DYNAMIC_PROMPTS, (table: Knex.TableBuilder) => {
      table.increments("id").primary();
      table.string("prompt").notNullable();
      table.string("type").notNullable(); // e.g., text, number, etc.
      table.json("choices").nullable(); // Options for prompts
      table.json("result_impact").notNullable(); // Stores material adjustment impacts
      table.timestamps(true, true); // created_at and updated_at
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable(DB_TABLES.DYNAMIC_PROMPTS);
  };
  