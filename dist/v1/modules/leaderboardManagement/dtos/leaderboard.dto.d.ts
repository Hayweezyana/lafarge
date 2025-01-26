export declare class CreateLeaderboardDto {
    team: string;
    total_score?: number;
}
export declare class UpdateLeaderboardDto {
    total_score?: number;
    updatedAt?: Date;
}
export declare class LeaderboardResponseDto {
    team: string;
    total_score: number;
    createdAt: Date;
    updatedAt: Date;
}
