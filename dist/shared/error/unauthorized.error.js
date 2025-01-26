"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const app_error_1 = __importDefault(require("./app.error"));
class UnauthorizedError extends app_error_1.default {
    constructor(message) {
        super(http_status_1.default.UNAUTHORIZED, message ?? "You are not authorized to perform this action");
    }
}
exports.default = UnauthorizedError;
//# sourceMappingURL=unauthorized.error.js.map