export interface CreateTeam {
  name: string;
  color: string;
}

export interface TeamResponse {
  id: number;
  name: string;
  createdAt: Date;
}
