export interface CreateSubmissions {
  id: number;
  team: string;
  scenarioId: number;
  cost: boolean;
  constraint: boolean;
  innovation: boolean;
  focus: boolean;
  score: number;
  text?: string; // Optional text field for additional information
  createdAt: Date;
}

export interface SubmissionResponse {
  id: number;
  team: string;
  scenarioId: number;
  cost: boolean;
  constraint: boolean;
  innovation: boolean;
  focus: boolean;
  score: number;
  text?: string; // Optional text field for additional information
  createdAt: Date;
}

export interface ISubmissions {
  id: number;
  team: string;
  scenarioId: number;
  cost: boolean;
  constraint: boolean;
  innovation: boolean;
  focus: boolean;
  score: number;
  text?: string; // Optional text field for additional information
  createdAt: Date;
}
  