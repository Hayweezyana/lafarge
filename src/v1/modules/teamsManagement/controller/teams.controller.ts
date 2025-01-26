import { Response, Request } from "express";
import { container } from "tsyringe";
import { injectable } from "tsyringe";
import TeamsService from "../services/teams-service";

@injectable()
class TeamsController {
	static async getAllTeams(_req: Request, res: Response) {
	  const teamsService = container.resolve(TeamsService);
	  const teams = await teamsService.getAllTeams();
	  return res.json(teams);
	}
  
	static async createTeam(req: Request, res: Response) {
	  const teamsService = container.resolve(TeamsService);
	  const newTeam = await teamsService.createTeam(req.body);
	  return res.status(201).json(newTeam);
	}
  }
  
  export default TeamsController;
