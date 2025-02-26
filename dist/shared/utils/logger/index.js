"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const app_config_1 = __importDefault(require("../../../config/app.config"));
const logger = (0, pino_1.default)({
    enabled: app_config_1.default.app.env !== "test",
    mixin() {
        return {
            service: app_config_1.default.app.name,
        };
    },
    serializers: {
        req(req) {
            return {
                method: req.method,
                headers: req.headers,
                ip: req.ip,
                url: req.url,
                path: req.path,
                params: req.params,
                query: req.query,
                body: req.body,
            };
        },
        res(res) {
            return {
                statusCode: res.raw.statusCode,
                headers: res.getHeaders(),
                body: res.raw.payload,
            };
        },
        err(err) {
            return {
                id: err.id,
                type: err.type,
                code: err.code,
                message: err.message,
                stack: err.stack,
            };
        },
    },
    redact: ["req.body.password", "req.headers.authorization"],
});
exports.default = logger;
//# sourceMappingURL=index.js.map