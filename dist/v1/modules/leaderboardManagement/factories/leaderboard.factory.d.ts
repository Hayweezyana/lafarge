import { ILeaderboard } from "../model/leaderboard.model";
export declare function createLeaderboardDto(team: string, total_score?: number): Partial<ILeaderboard>;
export declare function CreateLeaderboardDto(teams: string[]): Partial<ILeaderboard>[];
