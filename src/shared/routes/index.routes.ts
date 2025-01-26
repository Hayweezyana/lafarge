import auditTrailRoute from "../../v1/modules/moduleName/routes/audit-trail.route";
import appRoute from "../../v1/modules/app/app.route";
import healthRoute from "../../v1/modules/health/health.route";
import leaderboardRoute from "../../v1/modules/leaderboardManagement/routes/leaderboard.route";
import dynamicPromptsRoute from "../../v1/modules/dynamicPromptsManagement/routes/dynamic_prompts.route";
import materialsRoute from "../../v1/modules/materialsManagement/routes/materials.route";
import submissionsRoute from "../../v1/modules/submissionsManagement/routes/submissions.route";
import teamsRoute from "../../v1/modules/teamsManagement/routes/teams.route";


export default {
	app: appRoute,
	health: healthRoute,
	auditTrail: auditTrailRoute,
	leaderboardManagement: leaderboardRoute,
	teamsManagement: teamsRoute,
	dynamicPromptsManagement: dynamicPromptsRoute,
	materialsManagement: materialsRoute,
	submissionsManagement: submissionsRoute,
};
