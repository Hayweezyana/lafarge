"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const app_controller_1 = __importDefault(require("./app.controller"));
const appController = tsyringe_1.container.resolve(app_controller_1.default);
const app = (0, express_1.default)();
app.get("/", appController.getHello);
exports.default = app;
//# sourceMappingURL=app.route.js.map