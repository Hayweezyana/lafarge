import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDate } from "class-validator";

export class CreateLeaderboardDto {
  @IsNotEmpty()
  @IsString()
  team!: string;

  @IsOptional()
  @IsNumber()
  total_score?: number = 0; // Default to 0 if not provided
}

export class UpdateLeaderboardDto {
  @IsOptional()
  @IsNumber()
  total_score?: number;

  @IsOptional()
  @IsDate()
  updatedAt?: Date = new Date(); // Automatically set to the current date
}

export class LeaderboardResponseDto {
  @IsNotEmpty()
  @IsString()
  team!: string;

  @IsNotEmpty()
  @IsNumber()
  total_score!: number;

  @IsNotEmpty()
  @IsDate()
  createdAt!: Date;

  @IsNotEmpty()
  @IsDate()
  updatedAt!: Date;
}
