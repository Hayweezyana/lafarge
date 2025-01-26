import { DB_TABLES } from "@shared/enums/db-tables.enum";
import { Model, ModelObject } from "objection";

export class Submissions extends Model {
  static tableName = DB_TABLES.SUBMISSIONS;

  id!: number; // UUID type for id
  team!: string; // Team name as a string
  scenarioId!: number;
  cost!: boolean;
  constraint!: boolean;
  innovation!: boolean;
  focus!: boolean;
  score!: number;
  text?: string; // Optional text field for additional information
  createdAt!: Date;

  static get jsonSchema() {
    return {
      type: "object",
      required: ["team", "scenarioId", "cost", "constraint", "innovation", "focus", "score", "createdAt"],
      properties: {
        id: { type: "number" },
        team: { type: "string" },
        scenarioId: { type: "integer" },
        cost: { type: "boolean" },
        constraint: { type: "boolean" },
        innovation: { type: "boolean" },
        focus: { type: "boolean" },
        score: { type: "integer" },
        text: { type: "string" },
        createdAt: { type: "string", format: "date-time" },
      },
    };
  }
}

export type ISubmissions = ModelObject<Submissions>;
