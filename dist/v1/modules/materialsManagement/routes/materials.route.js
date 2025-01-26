"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const materials_controller_1 = __importDefault(require("../controller/materials.controller"));
const materialsController = tsyringe_1.container.resolve(materials_controller_1.default);
const router = express_1.default.Router();
router.get("/material", (req, res, next) => materialsController.getAllMaterials(req, res).catch((err) => next(err)));
exports.default = router;
//# sourceMappingURL=materials.route.js.map