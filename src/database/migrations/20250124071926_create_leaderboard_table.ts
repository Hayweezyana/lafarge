import { Knex } from "knex";
import { DB_TABLES } from "../../shared/enums/db-tables.enum";

exports.up = function (knex) {
  return knex.schema.createTable(DB_TABLES.LEADERBOARD, (table: Knex.TableBuilder) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
		table.uuid("submissionId").notNullable();
		table.integer("totalScore").notNullable();
		table.timestamps(true, true);

		// Add foreign key constraint
		table
			.foreign("submissionId")
			.references("id")
			.inTable(DB_TABLES.SUBMISSIONS)
			.onDelete("CASCADE")
			.onUpdate("CASCADE");

		table.index("submissionId");
	});
};
  
exports.down = function (knex) {
  return knex.schema.dropTable(DB_TABLES.LEADERBOARD);
};
  