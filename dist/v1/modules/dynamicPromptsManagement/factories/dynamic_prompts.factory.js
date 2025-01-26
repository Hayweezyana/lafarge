"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class dynamic_promptsFactory {
    static createAuditTrail(data) {
        const dynamic_prompts = {};
        dynamic_prompts.id = data.id;
        dynamic_prompts.promptText = data.promptText;
        dynamic_prompts.type = data.type;
        dynamic_prompts.impact = data.impact;
        return dynamic_prompts;
    }
    static readdynamicPromts(data) {
        const dynamic_prompts = {};
        dynamic_prompts.id = data.id;
        dynamic_prompts.promptText = data.promptText;
        dynamic_prompts.type = data.type;
        dynamic_prompts.impact = data.impact;
        return dynamic_prompts;
    }
}
exports.default = dynamic_promptsFactory;
//# sourceMappingURL=dynamic_prompts.factory.js.map