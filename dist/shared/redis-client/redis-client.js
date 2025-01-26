"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const tsyringe_1 = require("tsyringe");
const app_config_1 = __importDefault(require("@config/app.config"));
const logger_1 = __importDefault(require("@shared/utils/logger"));
let RedisClient = class RedisClient {
    constructor() {
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    get() {
        this.client = this.client || this.createClient();
        return this.client;
    }
    createClient() {
        const retryStrategy = (attempts) => {
            const delay = Math.min(attempts * 1000, 15000);
            return delay;
        };
        const reconnectOnError = (err) => {
            const targetError = "READONLY";
            if (err.message.slice(0, targetError.length) === targetError) {
                return true;
            }
            return false;
        };
        const redisClient = new ioredis_1.default({
            host: app_config_1.default.redis.host,
            port: app_config_1.default.redis.port,
            password: app_config_1.default.redis.password,
            showFriendlyErrorStack: true,
            retryStrategy,
            reconnectOnError,
            enableOfflineQueue: false,
            db: 0,
        });
        redisClient.on("error", (err) => {
            logger_1.default.error({ err }, "Redis client connection error");
        });
        redisClient.on("ready", () => {
            logger_1.default.info("Redis client is ready");
        });
        redisClient.on("reconnecting", () => {
            logger_1.default.info("Redis client is reconnected");
        });
        return redisClient;
    }
};
RedisClient = __decorate([
    (0, tsyringe_1.singleton)()
], RedisClient);
exports.default = RedisClient;
//# sourceMappingURL=redis-client.js.map