"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const app_error_1 = __importDefault(require("./app.error"));
const error_code_enum_1 = require("@shared/enums/error-code.enum");
class ServiceUnavailableError extends app_error_1.default {
    constructor(message) {
        super(http_status_1.default.SERVICE_UNAVAILABLE, message ?? "We are unable to process this request. Please try again.");
        this.errorCode = error_code_enum_1.ErrorCode.GENERAL_ERROR;
    }
}
exports.default = ServiceUnavailableError;
//# sourceMappingURL=service-unavailable.error.js.map