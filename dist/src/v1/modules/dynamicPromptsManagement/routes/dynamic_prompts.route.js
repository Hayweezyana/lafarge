"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const d_prompts_controller_1 = __importDefault(require("../controller/d_prompts.controller"));
const dynamic_promptsController = tsyringe_1.container.resolve(d_prompts_controller_1.default);
const router = express_1.default.Router();
router.get("/dynamicprompts", (req, res, next) => dynamic_promptsController.getAlldynamicPrompts(req, res).catch((err) => next(err)));
exports.default = router;
//# sourceMappingURL=dynamic_prompts.route.js.map