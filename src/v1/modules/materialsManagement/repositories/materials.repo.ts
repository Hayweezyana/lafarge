import { injectable } from "tsyringe";
import { BaseRepository } from "./base.repo";
import { Materials } from "../model/materials.model";

@injectable()
export class MaterialsRepository extends BaseRepository<Materials, any> {
  constructor() {
    super(Materials);
  }
}
export default MaterialsRepository;