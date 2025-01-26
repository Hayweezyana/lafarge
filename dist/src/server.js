"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const app_config_1 = __importDefault(require("./config/app.config"));
const logger_1 = __importDefault(require("./shared/utils/logger"));
const app = new app_1.default();
process
    .on("uncaughtException", (err) => {
    logger_1.default.error({ err });
    app.close();
    process.exit(1);
})
    .on("SIGINT", () => {
    app.close();
    process.exit(0);
});
app.listen(app_config_1.default.server.port, "127.0.0.1").on("error", (err) => {
    logger_1.default.error({ err });
    process.exit(1);
});
//# sourceMappingURL=server.js.map