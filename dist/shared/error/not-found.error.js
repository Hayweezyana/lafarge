"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const app_error_1 = __importDefault(require("./app.error"));
class NotFoundError extends app_error_1.default {
    constructor(message) {
        super(http_status_1.default.NOT_FOUND, message ?? "Data not found");
    }
}
exports.default = NotFoundError;
//# sourceMappingURL=not-found.error.js.map