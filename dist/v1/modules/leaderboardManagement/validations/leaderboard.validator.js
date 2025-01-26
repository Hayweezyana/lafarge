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
const tsyringe_1 = require("tsyringe");
const leaderboard_repo_1 = __importDefault(require("../repositories/leaderboard.repo"));
let LeaderboardService = class LeaderboardService {
    constructor(leaderboardRepo) {
        Object.defineProperty(this, "leaderboardRepo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: leaderboardRepo
        });
    }
    async getAll() {
        const leaderboard = await this.leaderboardRepo.getAll();
        return leaderboard;
    }
    async getByTeamId(team) {
        console.log("getByTeamId called with team:", team);
        return await this.leaderboardRepo.findById(team);
    }
    async updateById(team, score) {
        const existingEntry = await this.leaderboardRepo.findById(team);
        if (existingEntry) {
            await this.leaderboardRepo.updateById(team, { total_score: score });
            console.log(`Updated team ${team} with new total_score: ${score}`);
            return await this.leaderboardRepo.findById(team);
        }
        else {
            const newEntry = await this.leaderboardRepo.createLeaderboardEntry({ team, total_score: score });
            console.log(`Created new entry for team ${team} with total_score: ${score}`);
            return newEntry;
        }
    }
};
LeaderboardService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [leaderboard_repo_1.default])
], LeaderboardService);
exports.default = LeaderboardService;
//# sourceMappingURL=leaderboard.validator.js.map