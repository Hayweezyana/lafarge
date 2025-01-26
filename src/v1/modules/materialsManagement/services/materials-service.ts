import { injectable } from "tsyringe";
import { IMaterials } from "../model/materials.model";
import MaterialsRepo from "../repositories/materials.repo";

@injectable()
class MaterialsService {
	constructor(private readonly MaterialsRepo: MaterialsRepo) {}

	async getAll(): Promise<IMaterials[]> {
		const materials = await this.MaterialsRepo.getAll();

		return materials;
	}

  async getById(id: any): Promise<IMaterials> {
    const materials = await this.MaterialsRepo.findById(id);

    return materials;
  }

  async calculateMaterials(id: any, costPerTon: number, CO2EmissionsPerTon: number, Clinker: number, Limestone: number, Gypsum: number): Promise<{ totalCost: number; totalCO2Emissions: number }> {
	const materials = await this.MaterialsRepo.findById(id);

	if (!materials) {
		throw new Error("Material not found");
	  }

	const totalCost = costPerTon * Clinker + costPerTon * Limestone + costPerTon * Gypsum;
	const totalCO2Emissions = CO2EmissionsPerTon * Clinker + CO2EmissionsPerTon * Limestone + CO2EmissionsPerTon * Gypsum;

	return { totalCost, totalCO2Emissions };
  }
}

export default MaterialsService;
