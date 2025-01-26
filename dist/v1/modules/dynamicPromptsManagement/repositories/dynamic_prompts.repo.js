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
const base_repo_1 = require("./base.repo");
const knex_1 = __importDefault(require("knex"));
let dynamicPromptsRepository = class dynamicPromptsRepository extends base_repo_1.BaseRepository {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "prompts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    async findAll() {
        return this.prompts;
    }
    async getById(id) {
        const knexInstance = (0, knex_1.default)({ client: 'knex', connection: { filename: './data.db' } });
        const prompt = await knexInstance("dynamic_prompts").where("id", id).first();
        if (!prompt) {
            throw new Error(`Prompt with ID ${id} not found`);
        }
        return JSON.parse(prompt.result_impact);
    }
    async create(prompt) {
        prompt.id = this.prompts.length + 1;
        this.prompts.push(prompt);
        return prompt;
    }
    async delete(id) {
        this.prompts = this.prompts.filter((prompt) => prompt.id !== id);
    }
};
dynamicPromptsRepository = __decorate([
    (0, tsyringe_1.injectable)()
], dynamicPromptsRepository);
exports.default = dynamicPromptsRepository;
//# sourceMappingURL=dynamic_prompts.repo.js.map