import { IMaterials } from "../model/materials.model";
import MaterialsRepo from "../repositories/materials.repo";
declare class MaterialsService {
    private readonly MaterialsRepo;
    constructor(MaterialsRepo: MaterialsRepo);
    getAll(): Promise<IMaterials[]>;
    getById(id: any): Promise<IMaterials>;
    calculateMaterials(id: any, costPerTon: number, CO2EmissionsPerTon: number, Clinker: number, Limestone: number, Gypsum: number): Promise<{
        totalCost: number;
        totalCO2Emissions: number;
    }>;
}
export default MaterialsService;
