import { CreateOrUpdatedynamicPrompts } from "../dtos/dynamic_prompts.dto";
import { IdynamicPrompts } from "../model/dynamic_prompts.model";

class dynamic_promptsFactory {
	static createAuditTrail(data: CreateOrUpdatedynamicPrompts) {
		const dynamic_prompts = {} as IdynamicPrompts;

    dynamic_prompts.id = data.id;
    dynamic_prompts.promptText = data.promptText;
    dynamic_prompts.type = data.type;
    dynamic_prompts.impact = data.impact;

		return dynamic_prompts;
	}

  static readdynamicPromts(data: IdynamicPrompts) {
    const dynamic_prompts = {} as CreateOrUpdatedynamicPrompts;

    dynamic_prompts.id = data.id;
    dynamic_prompts.promptText = data.promptText;
    dynamic_prompts.type = data.type;
    dynamic_prompts.impact = data.impact;

		return dynamic_prompts;
	}
}

export default dynamic_promptsFactory;
