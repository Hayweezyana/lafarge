"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicPrompts = void 0;
const db_tables_enum_1 = require("@shared/enums/db-tables.enum");
const objection_1 = require("objection");
class dynamicPrompts extends objection_1.Model {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "promptText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "impact", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.dynamicPrompts = dynamicPrompts;
Object.defineProperty(dynamicPrompts, "tableName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: db_tables_enum_1.DB_TABLES.DYNAMIC_PROMPTS
});
Object.defineProperty(dynamicPrompts, "relationMappings", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {}
});
//# sourceMappingURL=dynamic_prompts.model.js.map