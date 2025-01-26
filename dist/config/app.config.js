"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_config_1 = require("./env.config");
const appConfig = {
    app: {
        name: process.env.APP_NAME,
        brand: process.env.BRAND_NAME,
        env: (0, env_config_1.getEnv)(),
    },
    server: {
        port: Number(process.env.PORT),
    },
    redis: {
        host: String(process.env.REDIS_HOST),
        port: Number(process.env.REDIS_PORT),
        password: String(process.env.REDIS_PASSWORD),
    },
    database: {
        DB_CLIENT: process.env.DB_CLIENT,
        DB_URL: String(process.env.DB_URL),
    },
};
exports.default = appConfig;
//# sourceMappingURL=app.config.js.map