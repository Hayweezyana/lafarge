import { Response, Request } from "express";
import { SuccessResponse } from "@shared/utils/response.util";
import { injectable } from "tsyringe";
import dynamicPromptsservice from "../services/dynamic_prompts-service";

@injectable()
class dynamicPromptsController {
	constructor(private readonly dynamicPromptsservice: dynamicPromptsservice) {}

	getAlldynamicPrompts = async (_req: Request, res: Response) => {
		const response: any = await this.dynamicPromptsservice.getAll();

		res.send(SuccessResponse("Operation successful", response));
	};

	getdynamicPromptsById = async (req: Request, res: Response) => {
		const response: any = await this.dynamicPromptsservice.getById(req.params.id);

		res.send(SuccessResponse("Operation successful", response));
	}
}

export default dynamicPromptsController;
