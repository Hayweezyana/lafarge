"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSubmissions = void 0;
const validateSubmissions = (req, res, next) => {
    const { teamId, scenarioId, materials, justification } = req.body;
    if (!teamId || !scenarioId || !Array.isArray(materials) || !justification) {
        return res.status(400).json({ message: "Invalid submission data" });
    }
    next();
};
exports.validateSubmissions = validateSubmissions;
//# sourceMappingURL=submissions.validator.js.map