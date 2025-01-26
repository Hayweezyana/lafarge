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
const submissions_repo_1 = __importDefault(require("../repositories/submissions.repo"));
let SubmissionsService = class SubmissionsService {
    constructor(SubmissionsRepo) {
        Object.defineProperty(this, "SubmissionsRepo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: SubmissionsRepo
        });
    }
    async createSubmissions(data) {
        const { team, innovation, cost, constraint, focus, } = data;
        const score = (cost ? 50 : 0) +
            (constraint ? 50 : 0) +
            (innovation ? 50 : 0) +
            (focus ? 50 : 0);
        const submission = await this.SubmissionsRepo.save({
            team,
            score,
        });
        return {
            ...submission,
            cost,
            constraint,
            innovation,
            focus,
        };
    }
    async getAllSubmissions() {
        console.log;
        const submissions = await this.SubmissionsRepo.getAll();
        return submissions;
    }
};
SubmissionsService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [submissions_repo_1.default])
], SubmissionsService);
exports.default = SubmissionsService;
//# sourceMappingURL=submissions-service.js.map