import { CreateTeam } from "../dtos/teams.dto";
import { ITeam } from "../model/teams.model";
declare class TeamFactory {
    static createAuditTrail(data: CreateTeam): ITeam;
    static readTeam(data: ITeam): CreateTeam;
}
export default TeamFactory;
