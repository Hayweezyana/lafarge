import { DB_TABLES } from "@shared/enums/db-tables.enum";
import { ObjectLiteral } from "@shared/types/object-literal.type";
import { Model, ModelObject } from "objection";

export class Submission extends Model {
  static tableName = DB_TABLES.SUBMISSIONS;

  id: string;
  teamName: string;
  teamNo: string;
  cost: number;
  constraint: number;
  innovations: ObjectLiteral;
  sessionId: number;
  scenarioId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ISubmission = ModelObject<Submission>;
