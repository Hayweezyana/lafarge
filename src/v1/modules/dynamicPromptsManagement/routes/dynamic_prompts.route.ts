import express, { Response, Request } from "express";
import { container } from "tsyringe";
import  dynamicPromptsController  from "../controller/d_prompts.controller";


const dynamic_promptsController = container.resolve(dynamicPromptsController);
const router = express.Router();

router.get("/dynamicprompts", (req: Request, res: Response, next) =>
	dynamic_promptsController.getAlldynamicPrompts(req, res).catch((err) => next(err))
);

export default router;

