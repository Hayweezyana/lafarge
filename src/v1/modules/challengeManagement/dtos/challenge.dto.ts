import { ObjectLiteral } from "@shared/types/object-literal.type";

export interface LeaderboardDto {
  position: number;
  submissionId: string;
  totalScore: number;
  teamName?: string;
  teamNo?: string;
  scenarioId?: number;
  sessionId?: number;
}

export interface SubmissionDto {
	teamName: string;
	teamNo: string;
	cost: number;
	constraint: number;
	innovations: ObjectLiteral;
	sessionId: number;
	scenarioId: number;
	id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
  