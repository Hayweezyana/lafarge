"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_util_1 = require("@shared/utils/response.util");
const tsyringe_1 = require("tsyringe");
const leaderboard_service_1 = __importDefault(require("../services/leaderboard-service"));
let LeaderboardController = class LeaderboardController {
    constructor(leaderboardService) {
        Object.defineProperty(this, "leaderboardService", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: leaderboardService
        });
        Object.defineProperty(this, "getLeaderboard", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (_req, res) => {
                const response = await this.leaderboardService.getAll();
                res.send((0, response_util_1.SuccessResponse)("Leaderboard fetched successfully", response));
            }
        });
        Object.defineProperty(this, "getLeaderboardByTeam", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (req, res) => {
                const team = req.params.teamId;
                if (!team) {
                    return res.status(400).send((0, response_util_1.SuccessResponse)("Team ID is required", {}));
                }
                const response = await this.leaderboardService.getByTeamId(team);
                if (!response) {
                    return res.status(404).send((0, response_util_1.SuccessResponse)("Team not found", {}));
                }
                res.send((0, response_util_1.SuccessResponse)("Team leaderboard details fetched successfully", response));
            }
        });
        Object.defineProperty(this, "updateLeaderboard", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (req, res) => {
                console.log("Incoming request body:", req.body);
                const { team, total_score } = req.body;
                if (!team || typeof team !== "string" || !total_score || typeof total_score !== "number") {
                    return res.status(400).send((0, response_util_1.SuccessResponse)("Invalid input", {}));
                }
                const response = await this.leaderboardService.updateById(team, total_score);
                if (response) {
                    res.send((0, response_util_1.SuccessResponse)("Leaderboard updated successfully", response));
                }
                else {
                    res.status(500).send((0, response_util_1.SuccessResponse)("Failed to update leaderboard", {}));
                }
            }
        });
    }
};
LeaderboardController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [leaderboard_service_1.default])
], LeaderboardController);
exports.default = LeaderboardController;
//# sourceMappingURL=leaderboard.controller.js.map