import { CreateSubmissions } from "../dtos/submissions.dto";
import { ISubmissions } from "../model/submissions.model";

class SubmissionsFactory {
	static createAuditTrail(data: CreateSubmissions) {
		const submissions = {} as ISubmissions;

		submissions.id = data.id;
		submissions.team = data.team;
		submissions.scenarioId = data.scenarioId;
		submissions.cost = data.cost;
		submissions.constraint = data.constraint;
		submissions.innovation = data.innovation;
		submissions.focus = data.focus;
		submissions.score = data.score;
		submissions.createdAt = data.createdAt;

		return submissions;
	}
}

export default SubmissionsFactory;
