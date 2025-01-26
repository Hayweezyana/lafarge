"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaderboard = void 0;
const db_tables_enum_1 = require("@shared/enums/db-tables.enum");
const objection_1 = require("objection");
class Leaderboard extends objection_1.Model {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "team", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "total_score", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updated_at", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    static get idColumn() {
        return "team";
    }
    $beforeInsert() {
        this.position = this.position || new Date().getTime();
        const now = new Date().toISOString();
        this.updated_at = now;
    }
    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["team", "total_score"],
            properties: {
                position: { type: "integer" },
                team: { type: "string" },
                total_score: { type: "integer" },
                updated_at: { type: "string", format: "date-time" },
            },
        };
    }
}
exports.Leaderboard = Leaderboard;
Object.defineProperty(Leaderboard, "tableName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: db_tables_enum_1.DB_TABLES.LEADERBOARD
});
//# sourceMappingURL=leaderboard.model.js.map