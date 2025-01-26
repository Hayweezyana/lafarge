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
const materials_repo_1 = __importDefault(require("../repositories/materials.repo"));
let MaterialsService = class MaterialsService {
    constructor(MaterialsRepo) {
        Object.defineProperty(this, "MaterialsRepo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: MaterialsRepo
        });
    }
    async getAll() {
        const materials = await this.MaterialsRepo.getAll();
        return materials;
    }
    async getById(id) {
        const materials = await this.MaterialsRepo.findById(id);
        return materials;
    }
    async calculateMaterials(id, costPerTon, CO2EmissionsPerTon, Clinker, Limestone, Gypsum) {
        const materials = await this.MaterialsRepo.findById(id);
        if (!materials) {
            throw new Error("Material not found");
        }
        const totalCost = costPerTon * Clinker + costPerTon * Limestone + costPerTon * Gypsum;
        const totalCO2Emissions = CO2EmissionsPerTon * Clinker + CO2EmissionsPerTon * Limestone + CO2EmissionsPerTon * Gypsum;
        return { totalCost, totalCO2Emissions };
    }
};
MaterialsService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [materials_repo_1.default])
], MaterialsService);
exports.default = MaterialsService;
//# sourceMappingURL=materials-service.js.map