import { DB_TABLES } from "@shared/enums/db-tables.enum";
import { Model, ModelObject } from "objection";

export class Leaderboard extends Model {
  static tableName = DB_TABLES.LEADERBOARD;

  id: string;
  position: number;
  submissionId: string;
  totalScore: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ILeaderboard = ModelObject<Leaderboard>;
