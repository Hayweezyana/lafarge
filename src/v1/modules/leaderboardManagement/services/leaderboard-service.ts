import { injectable } from "tsyringe";
import { ILeaderboard } from "../model/leaderboard.model";
import LeaderboardRepo from "../repositories/leaderboard.repo";

@injectable()
class LeaderboardService {
  constructor(private readonly leaderboardRepo: LeaderboardRepo) {}

  /**
   * Retrieves the leaderboard sorted by total points in descending order.
   */
  async getAll(): Promise<ILeaderboard[]> {
    const leaderboard = await this.leaderboardRepo.getAll();
    return leaderboard;
  }

  /**
   * Retrieves a leaderboard entry by team ID.
  // * @param teamId The ID of the team.
    */
   async getByTeamId(team: string): Promise<ILeaderboard | null> {
    console.log("getByTeamId called with team:", team);
    return await this.leaderboardRepo.findById(team);
   }

   /**
    * Updates the leaderboard entry for a team or creates a new one.
    * @param team The ID of the team.
    * @param score The total score from the submission.
    */

  async updateById(team: string, score: number): Promise<ILeaderboard | null> {
    const existingEntry = await this.leaderboardRepo.findById(team);

    if (existingEntry) {
      // Update the total score of the existing entry
      await this.leaderboardRepo.updateById(team, { total_score: score });
      console.log(`Updated team ${team} with new total_score: ${score}`);
      return await this.leaderboardRepo.findById(team);
    } else {
      // Create a new leaderboard entry
      const newEntry = await this.leaderboardRepo.createLeaderboardEntry({ team, total_score: score });
      console.log(`Created new entry for team ${team} with total_score: ${score}`);
      return newEntry;
    }
  }
}

export default LeaderboardService;
