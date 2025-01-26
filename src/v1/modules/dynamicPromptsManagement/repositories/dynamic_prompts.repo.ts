import { injectable } from "tsyringe";
import { BaseRepository } from "./base.repo";
import { dynamicPrompts } from "../model/dynamic_prompts.model";
import Knex from "knex";

@injectable()
class dynamicPromptsRepository extends BaseRepository<dynamicPrompts, any> {
  private prompts: dynamicPrompts[] = [];

  async findAll(): Promise<dynamicPrompts[]> {
    return this.prompts;
  }

  async getById(id: number): Promise<any> {
    const knexInstance = Knex({ client: 'knex', connection: { filename: './data.db' } });
    const prompt = await knexInstance("dynamic_prompts").where("id", id).first();
    if (!prompt) {
      throw new Error(`Prompt with ID ${id} not found`);
    }
    return JSON.parse(prompt.result_impact); // Parse result_impact if stored as JSON
  }
  async create(prompt: dynamicPrompts): Promise<dynamicPrompts> {
    prompt.id = this.prompts.length + 1;
    this.prompts.push(prompt);
    return prompt;
  }

  async delete(id: number): Promise<void> {
    this.prompts = this.prompts.filter((prompt) => prompt.id !== id);
  }
}
export default dynamicPromptsRepository;