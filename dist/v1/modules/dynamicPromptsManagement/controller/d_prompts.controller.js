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
const dynamic_prompts_service_1 = __importDefault(require("../services/dynamic_prompts-service"));
let dynamicPromptsController = class dynamicPromptsController {
    constructor(dynamicPromptsservice) {
        Object.defineProperty(this, "dynamicPromptsservice", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: dynamicPromptsservice
        });
        Object.defineProperty(this, "getAlldynamicPrompts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (_req, res) => {
                const response = await this.dynamicPromptsservice.getAll();
                res.send((0, response_util_1.SuccessResponse)("Operation successful", response));
            }
        });
        Object.defineProperty(this, "getdynamicPromptsById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (req, res) => {
                const response = await this.dynamicPromptsservice.getById(req.params.id);
                res.send((0, response_util_1.SuccessResponse)("Operation successful", response));
            }
        });
    }
};
dynamicPromptsController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [dynamic_prompts_service_1.default])
], dynamicPromptsController);
exports.default = dynamicPromptsController;
//# sourceMappingURL=d_prompts.controller.js.map