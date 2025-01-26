"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const app_error_1 = __importDefault(require("./app.error"));
class ConflictError extends app_error_1.default {
    constructor(message) {
        super(http_status_1.default.CONFLICT, message ?? "The request could not be completed due to a conflict with the current state of the target resource");
    }
}
exports.default = ConflictError;
//# sourceMappingURL=conflict.error.js.map