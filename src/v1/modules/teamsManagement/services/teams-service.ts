import { injectable } from "tsyringe";
import TeamsRepo from "../repositories/teams.repo";
import { CreateTeam, TeamResponse } from "../dtos/teams.dto";

@injectable()
class TeamsService {
  constructor(private readonly teamsRepo: TeamsRepo) {}

  async getAllTeams(): Promise<TeamResponse[]> {
    const teams = await this.teamsRepo.getAll();
    return teams.map(team => ({
      id: team.id,
      name: team.name,
      createdAt: team.createdAt,
    }));
  }

  async createTeam(data: CreateTeam): Promise<TeamResponse> {
    const { name } = data;
    const newTeam = await this.teamsRepo.save({ name });
    return {
      id: newTeam.id,
      name: newTeam.name,
      createdAt: newTeam.createdAt,
    };
  }
}

export default TeamsService;
