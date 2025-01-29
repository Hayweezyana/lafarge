import { DB_TABLES } from "@shared/enums/db-tables.enum";
import { Model, ModelObject } from "objection";

export class Leaderboard extends Model {
  static tableName = DB_TABLES.LEADERBOARD;

  id: string;
  submissionId: string;
  totalScore: number;
}

export type ILeaderboard = ModelObject<Leaderboard>;
