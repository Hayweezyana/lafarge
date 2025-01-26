import { DB_TABLES } from "@shared/enums/db-tables.enum";
import { Model, ModelObject } from "objection";
export declare class Team extends Model {
    static tableName: DB_TABLES;
    id: number;
    name: string;
    createdAt: Date;
    static get idColumn(): string;
}
export type ITeam = ModelObject<Team>;
