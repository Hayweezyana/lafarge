import { Response } from "express";
import HealthService from "./health.service";
declare class HealthController {
    private healthService;
    constructor(healthService: HealthService);
    readinessCheck: (res: Response) => Promise<void>;
    livelinessCheck: (res: Response) => Promise<void>;
}
export default HealthController;
