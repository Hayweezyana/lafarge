"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKnexInstance = void 0;
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const knexfile_1 = require("../../knexfile");
let knexPrimary;
let knexSecondary;
function init() {
    knexPrimary = (0, knex_1.default)(knexfile_1.config.primary);
    knexSecondary = (0, knex_1.default)(knexfile_1.config.secondary);
    objection_1.Model.knex(knexPrimary);
}
exports.default = init;
function getKnexInstance(type) {
    return type === "primary" ? knexPrimary : knexSecondary;
}
exports.getKnexInstance = getKnexInstance;
//# sourceMappingURL=index.js.map