"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const bootstrap_1 = require("./bootstrap");
const route_config_1 = __importDefault(require("@config/route.config"));
const index_routes_1 = __importDefault(require("./shared/routes/index.routes"));
const logger_1 = __importDefault(require("@shared/utils/logger"));
class App {
    constructor() {
        Object.defineProperty(this, "app", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "io", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.app = (0, express_1.default)();
        (0, bootstrap_1.bootstrapApp)(this.app);
        this.registerModules();
        this.globalErrorHandler();
        this.undefinedRoutesErrorHandler();
        this.server = http_1.default.createServer(this.app);
        this.io = new socket_io_1.Server(this.server, {
            maxHttpBufferSize: 1e6,
            cors: {
                origin: "http://localhost:3000",
                methods: ["GET", "POST"],
                credentials: true,
            },
        });
        this.initializeSocket();
    }
    registerModules() {
        this.app.use(express_1.default.json());
        this.app.use(index_routes_1.default.app);
        this.app.use(index_routes_1.default.health);
        this.app.use(route_config_1.default.v1, index_routes_1.default.submissionsManagement);
        this.app.use(route_config_1.default.v1, index_routes_1.default.leaderboardManagement);
        this.app.use(route_config_1.default.v1, index_routes_1.default.teamsManagement);
        this.app.use(route_config_1.default.v1, index_routes_1.default.dynamicPromptsManagement);
        this.app.use(route_config_1.default.v1, index_routes_1.default.materialsManagement);
    }
    initializeSocket() {
        this.io.on("connection", (socket) => {
            logger_1.default.info(`A client connected: ${socket.id}`);
            socket.on("message", (data) => {
                logger_1.default.info(`Received message: ${data}`);
                socket.emit("response", { message: "Hello from the server!" });
            });
            socket.on("disconnect", () => {
                logger_1.default.info(`Client disconnected: ${socket.id}`);
            });
        });
    }
    getInstance() {
        return this.app;
    }
    getSocketInstance() {
        return this.io;
    }
    globalErrorHandler() {
        (0, bootstrap_1.setErrorHandler)(this.app);
    }
    undefinedRoutesErrorHandler() {
        (0, bootstrap_1.setUndefinedRoutesErrorHandler)(this.app);
    }
    async close() {
        if (this.server) {
            this.server.close();
        }
    }
    listen(port, address = "127.0.0.1") {
        return this.server.listen(port, address, () => {
            logger_1.default.info(`Server listening on ${address}:${port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map