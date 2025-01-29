import { Knex } from "knex";
import { DB_TABLES } from "../../shared/enums/db-tables.enum";

exports.up = function (knex: Knex): Promise<void> {
	return knex.schema.alterTable(
		DB_TABLES.SUBMISSIONS,
		(table: Knex.TableBuilder) => {
			table.float("margin").defaultTo(0).notNullable();
		}
	);
};

exports.down = function (knex: Knex): Promise<void> {
	return knex.schema.alterTable(
		DB_TABLES.SUBMISSIONS,
		(table: Knex.TableBuilder) => {
			table.dropColumn("margin");
		}
	);
};
