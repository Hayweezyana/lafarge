import { CreateOrUpdatedynamicPrompts } from "../dtos/dynamic_prompts.dto";
import { IdynamicPrompts } from "../model/dynamic_prompts.model";
declare class dynamic_promptsFactory {
    static createAuditTrail(data: CreateOrUpdatedynamicPrompts): IdynamicPrompts;
    static readdynamicPromts(data: IdynamicPrompts): CreateOrUpdatedynamicPrompts;
}
export default dynamic_promptsFactory;
