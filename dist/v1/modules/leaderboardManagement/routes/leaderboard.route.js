"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const leaderboard_controller_1 = __importDefault(require("../controller/leaderboard.controller"));
const leaderboardController = tsyringe_1.container.resolve(leaderboard_controller_1.default);
const router = express_1.default.Router();
router.get("/leaderboard", leaderboardController.getLeaderboard);
router.get("/:teamId", leaderboardController.getLeaderboardByTeam);
router.post("/update", leaderboardController.updateLeaderboard);
exports.default = router;
//# sourceMappingURL=leaderboard.route.js.map