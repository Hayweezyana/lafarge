import TeamsRepo from "../repositories/teams.repo";
import { CreateTeam, TeamResponse } from "../dtos/teams.dto";
declare class TeamsService {
    private readonly teamsRepo;
    constructor(teamsRepo: TeamsRepo);
    getAllTeams(): Promise<TeamResponse[]>;
    createTeam(data: CreateTeam): Promise<TeamResponse>;
}
export default TeamsService;
