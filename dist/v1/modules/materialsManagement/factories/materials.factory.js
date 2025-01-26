"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class materialsFactory {
    static createAuditTrail(data) {
        const materials = {};
        materials.id = data.id;
        materials.name = data.name;
        materials.costPerTon = data.costPerTon;
        materials.CO2EmissionsPerTon = data.CO2EmissionsPerTon;
        materials.Clinker = data.Clinker;
        materials.Limestone = data.Limestone;
        materials.Gypsum = data.Gypsum;
        return materials;
    }
    static readMaterials(data) {
        const materials = {};
        materials.id = data.id;
        materials.name = data.name;
        materials.costPerTon = data.costPerTon;
        materials.CO2EmissionsPerTon = data.CO2EmissionsPerTon;
        materials.Clinker = data.Clinker;
        materials.Limestone = data.Limestone;
        materials.Gypsum = data.Gypsum;
        return materials;
    }
}
exports.default = materialsFactory;
//# sourceMappingURL=materials.factory.js.map