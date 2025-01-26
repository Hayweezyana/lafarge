"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const submissions_controller_1 = __importDefault(require("../controller/submissions.controller"));
const submissionsController = tsyringe_1.container.resolve(submissions_controller_1.default);
const router = express_1.default.Router();
router.post("/submit", async (req, res) => {
    try {
        const submissionData = req.body;
        await processSubmission(submissionData);
        res.status(200).json({ message: "Submission processed successfully." });
    }
    catch (error) {
        console.error("Error processing submission:", error);
        res.status(500).json({ message: "Failed to process submission." });
    }
});
router.get("/submit", (req, res) => submissionsController.getAllSubmissions(req, res));
exports.default = router;
async function processSubmission(submissionData) {
    console.log("Processing submission:", submissionData);
}
//# sourceMappingURL=submissions.route.js.map