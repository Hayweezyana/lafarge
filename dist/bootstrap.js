"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUndefinedRoutesErrorHandler = exports.setErrorHandler = exports.bootstrapApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app_error_1 = __importDefault(require("@shared/error/app.error"));
const logger_1 = __importDefault(require("@shared/utils/logger"));
const response_util_1 = require("@shared/utils/response.util");
const database_1 = __importDefault(require("./database"));
const validatorjs_1 = __importDefault(require("validatorjs"));
require("./shared/subscribers/audit-log.subscriber");
const http_status_1 = __importDefault(require("http-status"));
function bootstrapApp(app) {
    registerThirdPartyModules(app);
    (0, database_1.default)();
    registerCustomValidationRules();
}
exports.bootstrapApp = bootstrapApp;
function registerThirdPartyModules(app) {
    app.use((0, cors_1.default)({ origin: true }));
    app.use(express_1.default.json({ limit: "50mb" }));
    app.use(express_1.default.urlencoded({ extended: true }));
}
function registerCustomValidationRules() {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    validatorjs_1.default.register("password", (value) => {
        return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/.test(value);
    }, "The :attribute field must be at least 8 characters and must contain at least one uppercase, one lowercase, one digit, and one special character");
    validatorjs_1.default.register("name", (value) => {
        return /^[a-zA-Z-]{2,50}$/.test(value);
    }, "The :attribute field is not valid");
    validatorjs_1.default.register("cleanString", (value) => {
        return /^[a-zA-Z0-9_ -]{1,100}$/.test(value);
    }, "The :attribute field is not valid. Please ensure it doesn't contain special characters and not more than 100 characters");
    validatorjs_1.default.register("username", (value) => {
        return /^[a-zA-Z-][a-zA-Z0-9_-]{1,20}$/.test(value);
    }, "The :attribute field is not valid");
    validatorjs_1.default.register("uuid", (value) => {
        return uuidRegex.test(value);
    }, ":attribute is not a valid UUID");
    validatorjs_1.default.register("phone", (value) => {
        return value.match(/^(?:(?:(?:\+?234(?:\h1)?|01)\h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/);
    }, "The :attribute field is not in the correct format. Example of allowed format is 2348888888888.");
    validatorjs_1.default.register("amount", (value) => {
        return !Number.isSafeInteger(value);
    }, "The :attribute field is invalid");
}
function setErrorHandler(app) {
    app.use((err, _req, res, _next) => {
        const statusCode = err.statusCode || 503;
        const message = err instanceof app_error_1.default
            ? err.message
            : "We are unable to process this request. Please try again.";
        logger_1.default.error({ err: err.cause || err });
        res.status(statusCode).json((0, response_util_1.ErrorResponse)(message));
    });
}
exports.setErrorHandler = setErrorHandler;
function setUndefinedRoutesErrorHandler(app) {
    app.use((req, res, _next) => {
        const message = `Cannot ${req.method} ${req.originalUrl}`;
        res.status(http_status_1.default.NOT_FOUND).json((0, response_util_1.ErrorResponse)(message));
    });
}
exports.setUndefinedRoutesErrorHandler = setUndefinedRoutesErrorHandler;
//# sourceMappingURL=bootstrap.js.map