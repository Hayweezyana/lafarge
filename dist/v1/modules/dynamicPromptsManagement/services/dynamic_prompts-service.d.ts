import { IdynamicPrompts } from "../model/dynamic_prompts.model";
import dynamicPromptsRepo from "../repositories/dynamic_prompts.repo";
declare class dynamicPromptsService {
    private readonly dynamicPromptsRepo;
    constructor(dynamicPromptsRepo: dynamicPromptsRepo);
    getAll(): Promise<IdynamicPrompts[]>;
    getById(id: string): Promise<IdynamicPrompts>;
}
export default dynamicPromptsService;
