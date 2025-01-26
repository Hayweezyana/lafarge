import { injectable } from "tsyringe";
import { IdynamicPrompts } from "../model/dynamic_prompts.model";
import dynamicPromptsRepo from "../repositories/dynamic_prompts.repo";

@injectable()
class dynamicPromptsService {
	constructor(private readonly dynamicPromptsRepo: dynamicPromptsRepo) {}

	async getAll(): Promise<IdynamicPrompts[]> {
		const dynamic_prompts = await this.dynamicPromptsRepo.getAll();

		return dynamic_prompts;
	}

  async getById(id: string): Promise<IdynamicPrompts> {
    const dynamic_prompts = await this.dynamicPromptsRepo.findById(id);

    return dynamic_prompts;
  }
}

export default dynamicPromptsService;
