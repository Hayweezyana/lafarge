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
const submissions_service_1 = __importDefault(require("../services/submissions-service"));
const leaderboard_service_1 = __importDefault(require("../../leaderboardManagement/services/leaderboard-service"));
let SubmissionsController = class SubmissionsController {
    constructor(submissionsService, leaderboardService) {
        Object.defineProperty(this, "submissionsService", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: submissionsService
        });
        Object.defineProperty(this, "leaderboardService", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: leaderboardService
        });
        Object.defineProperty(this, "createSubmission", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (req, res) => {
                try {
                    const { team, scenarioId, cost, constraint, innovation, focus } = req.body;
                    const score = [cost, constraint, innovation, focus].reduce((total, value) => (value ? total + 50 : total), 0);
                    const submission = await this.submissionsService.createSubmissions({
                        id: Date.now(),
                        createdAt: new Date(),
                        team: team,
                        scenarioId,
                        cost,
                        constraint,
                        innovation,
                        focus,
                        score,
                    });
                    await this.leaderboardService.updateById(team, score);
                    res.send((0, response_util_1.SuccessResponse)("Submission created and leaderboard updated successfully", submission));
                }
                catch (error) {
                    console.error("Error creating submission:", error);
                    const errorMessage = error instanceof Error ? error.message : "Unknown error";
                    res.status(500).send((0, response_util_1.ErrorResponse)("Failed to create submission", [errorMessage]));
                }
            }
        });
        Object.defineProperty(this, "deleteSubmission", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (_req, res) => {
                res.send((0, response_util_1.SuccessResponse)("Delete submission feature not implemented yet"));
            }
        });
        Object.defineProperty(this, "getAllSubmissions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (_req, res) => {
                try {
                    console.log("Fetching submissions");
                    const submissions = await this.submissionsService.getAllSubmissions();
                    res.send((0, response_util_1.SuccessResponse)("Submissions retrieved successfully", submissions));
                }
                catch (error) {
                    console.error("Error fetching submissions:", error);
                    const errorMessage = error instanceof Error ? error.message : "Unknown error";
                    res.status(500).send((0, response_util_1.ErrorResponse)("Failed to retrieve submissions", [errorMessage]));
                }
            }
        });
    }
};
SubmissionsController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [submissions_service_1.default,
        leaderboard_service_1.default])
], SubmissionsController);
exports.default = SubmissionsController;
//# sourceMappingURL=submissions.controller.js.map