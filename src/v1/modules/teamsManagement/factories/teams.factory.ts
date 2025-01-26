import { CreateTeam } from "../dtos/teams.dto";
import { ITeam } from "../model/teams.model";

class TeamFactory {
	static createAuditTrail(data: CreateTeam) {
		const Team = {} as ITeam;

	Team.name = data.name;
   
		return Team;
	}

  static readTeam(data: ITeam) {
    const Team = {} as CreateTeam;

    Team.name = data.name;
   
		return Team;
	}
}

export default TeamFactory;
