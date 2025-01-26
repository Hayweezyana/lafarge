import { DB_TABLES } from "@shared/enums/db-tables.enum";
import { Model, ModelObject } from "objection";
export declare class Submissions extends Model {
    static tableName: DB_TABLES;
    id: number;
    team: string;
    scenarioId: number;
    cost: boolean;
    constraint: boolean;
    innovation: boolean;
    focus: boolean;
    score: number;
    text?: string;
    createdAt: Date;
    static get jsonSchema(): {
        type: string;
        required: string[];
        properties: {
            id: {
                type: string;
            };
            team: {
                type: string;
            };
            scenarioId: {
                type: string;
            };
            cost: {
                type: string;
            };
            constraint: {
                type: string;
            };
            innovation: {
                type: string;
            };
            focus: {
                type: string;
            };
            score: {
                type: string;
            };
            text: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
        };
    };
}
export type ISubmissions = ModelObject<Submissions>;
