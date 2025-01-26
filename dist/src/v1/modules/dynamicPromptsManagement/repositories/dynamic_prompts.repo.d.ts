import { BaseRepository } from "./base.repo";
import { dynamicPrompts } from "../model/dynamic_prompts.model";
declare class dynamicPromptsRepository extends BaseRepository<dynamicPrompts, any> {
    private prompts;
    findAll(): Promise<dynamicPrompts[]>;
    getById(id: number): Promise<any>;
    create(prompt: dynamicPrompts): Promise<dynamicPrompts>;
    delete(id: number): Promise<void>;
}
export default dynamicPromptsRepository;
