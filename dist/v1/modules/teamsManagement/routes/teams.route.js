"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teams_controller_1 = __importDefault(require("../controller/teams.controller"));
const router = express_1.default.Router();
router.get("/teams", teams_controller_1.default.getAllTeams);
router.post("/team", teams_controller_1.default.createTeam);
exports.default = router;
//# sourceMappingURL=teams.route.js.map