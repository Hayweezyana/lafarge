import { MaterialDTO } from "../dtos/materials.dto";
import { IMaterials } from "../model/materials.model";
declare class materialsFactory {
    static createAuditTrail(data: MaterialDTO): IMaterials;
    static readMaterials(data: IMaterials): MaterialDTO;
}
export default materialsFactory;
