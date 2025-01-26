"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submissions = void 0;
const db_tables_enum_1 = require("@shared/enums/db-tables.enum");
const objection_1 = require("objection");
class Submissions extends objection_1.Model {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "id", {
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
        Object.defineProperty(this, "scenarioId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cost", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "constraint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "innovation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "focus", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "score", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "text", {
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
    static get jsonSchema() {
        return {
            type: "object",
            required: ["team", "scenarioId", "cost", "constraint", "innovation", "focus", "score", "createdAt"],
            properties: {
                id: { type: "number" },
                team: { type: "string" },
                scenarioId: { type: "integer" },
                cost: { type: "boolean" },
                constraint: { type: "boolean" },
                innovation: { type: "boolean" },
                focus: { type: "boolean" },
                score: { type: "integer" },
                text: { type: "string" },
                createdAt: { type: "string", format: "date-time" },
            },
        };
    }
}
exports.Submissions = Submissions;
Object.defineProperty(Submissions, "tableName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: db_tables_enum_1.DB_TABLES.SUBMISSIONS
});
//# sourceMappingURL=submissions.model.js.map