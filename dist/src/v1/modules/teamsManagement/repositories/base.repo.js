"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(model) {
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.model = model;
    }
    setModel(model) {
        this.model = model;
    }
    async findById(id, relations = []) {
        const query = this.model.query();
        for (const relation of relations) {
            query.withGraphFetched(relation);
        }
        return await query.findById(id);
    }
    async updateById(id, data, trx) {
        return await this.model.query(trx).patchAndFetchById(id, data).returning("*");
    }
    async save(data, transaction) {
        return await this.model.query(transaction).insert(data).returning("*");
    }
    async saveBulk(data, transaction) {
        return await this.model.query(transaction).insert(data).returning("*");
    }
    async getAll() {
        return await this.model.query();
    }
    async getAllWithRelations(relations = []) {
        const query = this.model.query();
        for (const relation of relations) {
            query.withGraphFetched(relation);
        }
        return await query;
    }
    async deleteById(id) {
        return await this.model.query().deleteById(id);
    }
    async findByName(name) {
        return await this.model.query().findOne({ name });
    }
    async findByEmail(email) {
        return await this.model.query().findOne({ email });
    }
    async findOne(filter) {
        return await this.model.query().where(filter).first();
    }
    async findOneWhere(filter) {
        return await this.model.query().where(filter)[0];
    }
    async findWhere(filter, relations = []) {
        const query = this.model.query();
        for (const relation of relations) {
            query.withGraphFetched(relation);
        }
        return await query.where(filter);
    }
    async findOrWhere(filter, orFilter, andFilter) {
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
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repo.js.map