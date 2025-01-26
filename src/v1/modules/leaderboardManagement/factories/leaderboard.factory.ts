import { ILeaderboard } from "../model/leaderboard.model";

/**
 * Factory function to create a new leaderboard entry.
 * @param team The team name or identifier.
 * @param totalPoints The initial points for the team (default is 0).
 * @returns A new leaderboard entry instance.
 */
export function createLeaderboardDto(
  team: string,
  total_score: number = 0
): Partial<ILeaderboard> {
  return {
    team,
    total_score,
  };
}

/**
 * Factory function to create multiple leaderboard entries.
 * @param teams Array of team names or identifiers.
 * @returns An array of new leaderboard entry instances.
 */
export function CreateLeaderboardDto(teams: string[]): Partial<ILeaderboard>[] {
  return teams.map((team) => createLeaderboardDto(team));
}

