"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const db_tables_enum_1 = require("@shared/enums/db-tables.enum");
const objection_1 = require("objection");
class Team extends objection_1.Model {
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
        Object.defineProperty(this, "createdAt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    static get idColumn() {
        return "id";
    }
}
exports.Team = Team;
Object.defineProperty(Team, "tableName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: db_tables_enum_1.DB_TABLES.TEAMS
});
//# sourceMappingURL=teams.model.js.map