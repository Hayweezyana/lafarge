import { Response, Request } from "express";
import dynamicPromptsservice from "../services/dynamic_prompts-service";
declare class dynamicPromptsController {
    private readonly dynamicPromptsservice;
    constructor(dynamicPromptsservice: dynamicPromptsservice);
    getAlldynamicPrompts: (_req: Request, res: Response) => Promise<void>;
    getdynamicPromptsById: (req: Request, res: Response) => Promise<void>;
}
export default dynamicPromptsController;
