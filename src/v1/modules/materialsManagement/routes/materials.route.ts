import express, { Response, Request } from "express";
import { container } from "tsyringe";
import  MaterialsController  from "../controller/materials.controller";


const materialsController = container.resolve(MaterialsController);
const router = express.Router();

router.get("/material", (req: Request, res: Response, next) =>
	materialsController.getAllMaterials(req, res).catch((err) => next(err))
);

export default router;

