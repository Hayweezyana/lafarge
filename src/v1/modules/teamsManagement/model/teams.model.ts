import { DB_TABLES } from "@shared/enums/db-tables.enum";
import { Model, ModelObject } from "objection";

export class Team extends Model {
	static tableName = DB_TABLES.TEAMS;

    id!: number;
    name!: string;
    createdAt!: Date;

  static get idColumn() {
    return "id";
  }
}

export type ITeam = ModelObject<Team>;
