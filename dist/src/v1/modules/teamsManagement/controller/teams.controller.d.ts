import { Response, Request } from "express";
declare class TeamsController {
    static getAllTeams(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static createTeam(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export default TeamsController;
