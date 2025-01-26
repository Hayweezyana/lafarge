import { Response, Request } from "express";
import Materialsservice from "../services/materials-service";
declare class MaterialsController {
    private readonly Materialsservice;
    constructor(Materialsservice: Materialsservice);
    getAllMaterials: (_req: Request, res: Response) => Promise<void>;
    getMaterialsById: (req: Request, res: Response) => Promise<void>;
}
export default MaterialsController;
