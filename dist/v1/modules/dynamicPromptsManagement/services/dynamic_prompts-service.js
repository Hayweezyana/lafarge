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
const dynamic_prompts_repo_1 = __importDefault(require("../repositories/dynamic_prompts.repo"));
let dynamicPromptsService = class dynamicPromptsService {
    constructor(dynamicPromptsRepo) {
        Object.defineProperty(this, "dynamicPromptsRepo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: dynamicPromptsRepo
        });
    }
    async getAll() {
        const dynamic_prompts = await this.dynamicPromptsRepo.getAll();
        return dynamic_prompts;
    }
    async getById(id) {
        const dynamic_prompts = await this.dynamicPromptsRepo.findById(id);
        return dynamic_prompts;
    }
};
dynamicPromptsService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [dynamic_prompts_repo_1.default])
], dynamicPromptsService);
exports.default = dynamicPromptsService;
//# sourceMappingURL=dynamic_prompts-service.js.map