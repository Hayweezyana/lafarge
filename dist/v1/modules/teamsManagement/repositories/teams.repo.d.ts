import { BaseRepository } from "./base.repo";
import { Team } from "../model/teams.model";
declare class TeamsRepo extends BaseRepository<Team, any> {
    constructor();
}
export default TeamsRepo;
