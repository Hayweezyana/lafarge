import { Response } from "express";
import AppService from "./app.service";
declare class AppController {
    private appService;
    constructor(appService: AppService);
    getHello: (res: Response) => Promise<void>;
}
export default AppController;
