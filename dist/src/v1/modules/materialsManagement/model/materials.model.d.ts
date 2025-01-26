import { DB_TABLES } from "@shared/enums/db-tables.enum";
import { Model, ModelObject } from "objection";
export declare class Materials extends Model {
    static tableName: DB_TABLES;
    id: number;
    name: string;
    costPerTon: number;
    CO2EmissionsPerTon: number;
    Clinker: number;
    Limestone: number;
    Gypsum: number;
    static relationMappings: {};
}
export type IMaterials = ModelObject<Materials>;
