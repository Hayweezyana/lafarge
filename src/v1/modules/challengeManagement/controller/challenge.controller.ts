import { Response, Request } from "express";
import { SuccessResponse, ErrorResponse } from "@shared/utils/response.util";
import { injectable } from "tsyringe";
import ChallengeService from "../services/challenge.service";

@injectable()
class SubmissionsController {
	constructor(private readonly submissionsService: ChallengeService) {}

	/**
	 * Create a new submission and update the leaderboard
	 */
	createSubmission = async (req: Request, res: Response) => {
		try {
			const { team, scenarioId, cost, constraint, innovation, focus } =
				req.body;

			// Calculate the total score
			const score = [cost, constraint, innovation, focus].reduce(
				(total, value) => (value ? total + 50 : total),
				0
			);

			// Create the submission record
			const submission = await this.submissionsService.createSubmissions({
				id: Date.now(), // generate a unique id using the current timestamp
				createdAt: new Date(),
				team: team,
				scenarioId,
				cost,
				constraint,
				innovation,
				focus,
				score,
			});

			// Update the leaderboard with the calculated score
			await this.leaderboardService.updateById(team, score);

			res.send(
				SuccessResponse(
					"Submission created and leaderboard updated successfully",
					submission
				)
			);
		} catch (error) {
			console.error("Error creating submission:", error);
			const errorMessage =
				error instanceof Error ? error.message : "Unknown error";
			res
				.status(500)
				.send(ErrorResponse("Failed to create submission", [errorMessage]));
		}
	};

	/**
	 * Get all submissions
	 */
	getAllSubmissions = async (_req: Request, res: Response) => {
		try {
			console.log("Fetching submissions");
			const submissions = await this.submissionsService.getAllSubmissions();
			res.send(
				SuccessResponse("Submissions retrieved successfully", submissions)
			);
		} catch (error) {
			console.error("Error fetching submissions:", error);
			const errorMessage =
				error instanceof Error ? error.message : "Unknown error";
			res
				.status(500)
				.send(ErrorResponse("Failed to retrieve submissions", [errorMessage]));
		}
	};

	/**
	 * Get submissions by team
	 */
	// getSubmissionsByTeam = async (req: Request, res: Response) => {
	//   try {
	//     const team: number = parseInt(req.params.team, 10);
	//     //const submissions = await this.submissionsService.getSubmissionsByTeam(team);
	//     res.send(SuccessResponse("Submissions for team retrieved successfully", submissions));
	//   } catch (error) {
	//     console.error("Error fetching submissions by team:", error);
	//     const errorMessage = error instanceof Error ? error.message : "Unknown error";
	//     res.status(500).send(ErrorResponse("Failed to retrieve submissions by team", [errorMessage]));
	//   }
	// };
}

export default SubmissionsController;
