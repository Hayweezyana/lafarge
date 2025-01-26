import express from "express";
import { container } from "tsyringe";
import  SubmissionsController  from "../controller/submissions.controller";


const submissionsController = container.resolve(SubmissionsController);
const router = express.Router();

router.post("/submit", async (req, res) => {
    try {
      const submissionData = req.body;
      await processSubmission(submissionData);
      res.status(200).json({ message: "Submission processed successfully." });
    } catch (error) {
      console.error("Error processing submission:", error);
      res.status(500).json({ message: "Failed to process submission." });
    }
  });
router.get("/submit", (req, res) => submissionsController.getAllSubmissions(req, res));

export default router;

async function processSubmission(submissionData: any) {
    // Implement your submission processing logic here
    console.log("Processing submission:", submissionData);
    // Example: Save submissionData to the database
    // await database.save(submissionData);
}

