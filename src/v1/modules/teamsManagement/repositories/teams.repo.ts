import { injectable } from "tsyringe";
import { BaseRepository } from "./base.repo";
import { Team } from "../model/teams.model";

@injectable()
class TeamsRepo extends BaseRepository<Team, any> {
  constructor() {
    super(Team);
  }
}

export default TeamsRepo;