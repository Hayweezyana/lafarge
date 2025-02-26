import { ObjectLiteral } from "@shared/types/object-literal.type";
import { Model, Transaction } from "objection";

export class BaseRepository<T, M extends Model> {
	private model: typeof Model | any;
	constructor(model: M | any) {
		this.model = model;
	}

	setModel(model: M | any) {
		this.model = model;
	}

	async findById(id: string, relations: string[] = []): Promise<M> {
		const query = this.model.query();

		for (const relation of relations) {
			query.withGraphFetched(relation);
		}

		return await query.findById(id);
	}

	async updateById(
		id: string,
		data: Partial<M>,
		trx?: Transaction
	): Promise<M> {
		return await this.model
			.query(trx)
			.patchAndFetchById(id, data)
			.returning("*");
	}

	async save(data: Partial<T>, transaction?: Transaction): Promise<M> {
		return await this.model.query(transaction).insert(data).returning("*");
	}

	async saveBulk(data: Partial<T[]>, transaction?: Transaction): Promise<M> {
		return await this.model.query(transaction).insert(data).returning("*");
	}

	async getAll() {
		return await this.model.query();
	}

	async getAllWithRelations(relations: string[] = []) {
		const query = this.model.query();

		for (const relation of relations) {
			query.withGraphFetched(relation);
		}

		return await query;
	}

	async deleteById(id: string) {
		return await this.model.query().deleteById(id);
	}

	async findByName(name: string) {
		return await this.model.query().findOne({ name });
	}

	async findByEmail(email: string) {
		return await this.model.query().findOne({ email });
	}

	async findOne(filter: ObjectLiteral): Promise<T | undefined> {
		return await this.model.query().where(filter).first();
	}

	async findOneWhere(filter: ObjectLiteral): Promise<T | undefined> {
		return await this.model.query().where(filter)[0];
	}

	async findWhere(
		filter: ObjectLiteral,
		relations: string[] = [],
		params: string[] = []
	): Promise<T[]> {
		const query = this.model.query();

		// Include relations
		for (const relation of relations) {
			query.withGraphFetched(relation);
		}

		// Apply filters
		query.where(filter);

		if (params.length > 0) {
			query.whereIn("submissionId", params);
		}

		return await query;
	}

	async findOrWhere(
		filter: ObjectLiteral,
		orFilter?: ObjectLiteral,
		andFilter?: ObjectLiteral
	): Promise<T | undefined> {
		const query = this.model.query();

		query.where(filter);

		if (orFilter) {
			for (const key in orFilter) {
				if (Object.prototype.hasOwnProperty.call(orFilter, key)) {
					query.orWhere(key, orFilter[key]);
				}
			}
		}

		if (andFilter) {
			for (const key in andFilter) {
				if (Object.prototype.hasOwnProperty.call(andFilter, key)) {
					query.andWhere(key, andFilter[key]);
				}
			}
		}

		return await query.first();
	}
}
