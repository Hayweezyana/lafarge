import { Request, Response } from "express";
import AppService from "./app.service";
declare class AppController {
    private appService;
    constructor(appService: AppService);
    getHello: (_req: Request, res: Response) => Promise<void>;
}
export default AppController;
