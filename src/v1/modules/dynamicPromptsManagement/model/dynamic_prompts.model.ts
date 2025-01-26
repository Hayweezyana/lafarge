import { DB_TABLES } from "@shared/enums/db-tables.enum";
import { Model, ModelObject } from "objection";

export class dynamicPrompts extends Model {
	static tableName = DB_TABLES.DYNAMIC_PROMPTS;

    id: number | null;
    promptText: string;
    type: string;
    impact: string;

	static relationMappings = {};
}

export type IdynamicPrompts = ModelObject<dynamicPrompts>;
