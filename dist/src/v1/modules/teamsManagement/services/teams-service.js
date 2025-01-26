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
const teams_repo_1 = __importDefault(require("../repositories/teams.repo"));
let TeamsService = class TeamsService {
    constructor(teamsRepo) {
        Object.defineProperty(this, "teamsRepo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: teamsRepo
        });
    }
    async getAllTeams() {
        const teams = await this.teamsRepo.getAll();
        return teams.map(team => ({
            id: team.id,
            name: team.name,
            createdAt: team.createdAt,
        }));
    }
    async createTeam(data) {
        const { name } = data;
        const newTeam = await this.teamsRepo.save({ name });
        return {
            id: newTeam.id,
            name: newTeam.name,
            createdAt: newTeam.createdAt,
        };
    }
};
TeamsService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [teams_repo_1.default])
], TeamsService);
exports.default = TeamsService;
//# sourceMappingURL=teams-service.js.map