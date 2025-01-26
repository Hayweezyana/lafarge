import { injectable } from "tsyringe";
import { ILeaderboard } from "../model/leaderboard.model";
import LeaderboardRepo from "../repositories/leaderboard.repo";
import { Knex } from "knex";

@injectable()
class LeaderboardService {
  constructor(private readonly leaderboardRepo: LeaderboardRepo, private readonly knex: Knex) {}

  /**
   * Retrieves the leaderboard sorted by total points in descending order.
   */
  async getAll(): Promise<ILeaderboard[]> {
    const leaderboard = await this.leaderboardRepo.getAll();
    return leaderboard;
  }

  /**
   * Retrieves a leaderboard entry by team ID.
  // * @param team The ID of the team.
    */
   async getByTeamId(team: string): Promise<ILeaderboard | null> {
    console.log("getByTeamId called with team:", team);
    return await this.leaderboardRepo.findById(team);
   }

   async updateLeaderboard(): Promise<void> {
    // Aggregate scores from the submissions table
    const leaderboardData = await this.knex("submissions")
      .select("team")
      .sum("score as total_score")
      .groupBy("team");

    // Loop through aggregated scores and update the leaderboard
    for (const { team, total_score } of leaderboardData) {
      const existingEntry = await this.leaderboardRepo.findById(team);

      if (existingEntry) {
        // Update the total score of the existing entry
        await this.leaderboardRepo.updateById(team, { total_score });
        console.log(`Updated team ${team} with new total_score: ${total_score}`);
      } else {
        // Create a new leaderboard entry
        await this.leaderboardRepo.createLeaderboardEntry({
          team,
          total_score,
        });
        console.log(`Created new entry for team ${team} with total_score: ${total_score}`);
      }
    }
  }
}

export default LeaderboardService;
