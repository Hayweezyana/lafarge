import { MaterialDTO } from "../dtos/materials.dto";
import { IMaterials } from "../model/materials.model";

class materialsFactory {
	static createAuditTrail(data: MaterialDTO) {
		const materials = {} as IMaterials;

    materials.id = data.id;
    materials.name = data.name;
    materials.costPerTon = data.costPerTon;
    materials.CO2EmissionsPerTon = data.CO2EmissionsPerTon;
    materials.Clinker = data.Clinker;
    materials.Limestone = data.Limestone;
    materials.Gypsum = data.Gypsum;

		return materials;
	}

  static readMaterials(data: IMaterials) {
    const materials = {} as MaterialDTO;

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

  

export default materialsFactory;
