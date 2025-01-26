import { Response, Request } from "express";
import { SuccessResponse } from "@shared/utils/response.util";
import { injectable } from "tsyringe";
import Materialsservice from "../services/materials-service";

@injectable()


class MaterialsController {
	constructor(private readonly Materialsservice: Materialsservice) {}
 
	getAllMaterials = async (_req: Request, res: Response) => {
		const response: any = await this.Materialsservice.getAll();

		res.send(SuccessResponse("Operation successful", response));
	};

	getMaterialsById = async (req: Request, res: Response) => {
		const response: any = await this.Materialsservice.getById(req.params.id);

		res.send(SuccessResponse("Operation successful", response));
	}
}

export default MaterialsController;
