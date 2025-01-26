import { DB_TABLES } from "@shared/enums/db-tables.enum";
import { Model, ModelObject } from "objection";

export class Leaderboard extends Model {
  static tableName = DB_TABLES.LEADERBOARD; // Table name

  position!: number; // Position as string (or change to number if required)
  team!: string; // Team name (primary key)
  total_score!: number; // Total score for the team
  updated_at!: string; // Timestamp of the last update

  static get idColumn(): string {
    return "team"; // Primary key column
  }

  $beforeInsert() {
    this.position = this.position || new Date().getTime(); // Default position if missing
    const now = new Date().toISOString();
    this.updated_at = now;
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["team", "total_score"], // UpdatedAt is optional
      properties: {
        position: { type: "integer" },
        team: { type: "string" },
        total_score: { type: "integer" },
        updated_at: { type: "string", format: "date-time" },
      },
    };
  }
}

export type ILeaderboard = ModelObject<Leaderboard>;
