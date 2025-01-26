import express from "express";
import  TeamsController  from "../controller/teams.controller";


const router = express.Router();

router.get("/teams", TeamsController.getAllTeams);
router.post("/team", TeamsController.createTeam);	

export default router;

