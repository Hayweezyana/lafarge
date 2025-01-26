"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Materials = void 0;
const db_tables_enum_1 = require("@shared/enums/db-tables.enum");
const objection_1 = require("objection");
class Materials extends objection_1.Model {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "costPerTon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "CO2EmissionsPerTon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Clinker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Limestone", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Gypsum", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.Materials = Materials;
Object.defineProperty(Materials, "tableName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: db_tables_enum_1.DB_TABLES.MATERIALS
});
Object.defineProperty(Materials, "relationMappings", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {}
});
//# sourceMappingURL=materials.model.js.map