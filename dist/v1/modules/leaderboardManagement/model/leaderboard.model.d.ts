import { DB_TABLES } from "@shared/enums/db-tables.enum";
import { Model, ModelObject } from "objection";
export declare class Leaderboard extends Model {
    static tableName: DB_TABLES;
    position: number;
    team: string;
    total_score: number;
    updated_at: string;
    static get idColumn(): string;
    $beforeInsert(): void;
    $beforeUpdate(): void;
    static get jsonSchema(): {
        type: string;
        required: string[];
        properties: {
            position: {
                type: string;
            };
            team: {
                type: string;
            };
            total_score: {
                type: string;
            };
            updated_at: {
                type: string;
                format: string;
            };
        };
    };
}
export type ILeaderboard = ModelObject<Leaderboard>;
