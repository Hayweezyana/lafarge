"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const tsyringe_2 = require("tsyringe");
const teams_service_1 = __importDefault(require("../services/teams-service"));
let TeamsController = class TeamsController {
    static async getAllTeams(_req, res) {
        const teamsService = tsyringe_1.container.resolve(teams_service_1.default);
        const teams = await teamsService.getAllTeams();
        return res.json(teams);
    }
    static async createTeam(req, res) {
        const teamsService = tsyringe_1.container.resolve(teams_service_1.default);
        const newTeam = await teamsService.createTeam(req.body);
        return res.status(201).json(newTeam);
    }
};
TeamsController = __decorate([
    (0, tsyringe_2.injectable)()
], TeamsController);
exports.default = TeamsController;
//# sourceMappingURL=teams.controller.js.map