"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = __importDefault(require("@config/app.config"));
class AppService {
    getHello() {
        return {
            service: app_config_1.default.app.name,
            version: '1.0.0',
        };
    }
}
exports.default = AppService;
//# sourceMappingURL=app.service.js.map