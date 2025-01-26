"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const health_controller_1 = __importDefault(require("./health.controller"));
const healthController = tsyringe_1.container.resolve(health_controller_1.default);
const router = express_1.default.Router();
router.get("/readyz", (res) => {
    healthController.readinessCheck(res);
});
router.get("/livez", (res) => {
    healthController.livelinessCheck(res);
});
exports.default = router;
//# sourceMappingURL=health.route.js.map