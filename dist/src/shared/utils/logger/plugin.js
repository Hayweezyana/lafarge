"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const util_1 = require("./util");
function logRequest(req, res, next) {
    res.on("finish", () => {
        const logLevel = (0, util_1.getLogLevelFromStatusCode)(res.statusCode);
        _1.default[logLevel]({
            req: req,
            res: res,
        });
    });
    next();
}
function addPayloadToResponse(res, next) {
    const originalSend = res.send;
    res.send = function (body) {
        Object.assign(res, { payload: body });
        return originalSend.call(this, body);
    };
    next();
}
function loggerPlugin(app) {
    app.use(addPayloadToResponse);
    app.use(logRequest);
}
exports.default = loggerPlugin;
//# sourceMappingURL=plugin.js.map