"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const audit_trail_controller_1 = __importDefault(require("../controller/audit-trail.controller"));
const auditTrailController = tsyringe_1.container.resolve(audit_trail_controller_1.default);
const router = express_1.default.Router();
router.get("/audit-trails", (res) => {
    auditTrailController.getAll(res);
});
exports.default = router;
//# sourceMappingURL=audit-trail.route.js.map