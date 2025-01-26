import { ObjectLiteral } from "@shared/types/object-literal.type";
import { Model, Transaction } from "objection";
export declare class BaseRepository<T, M extends Model> {
    private model;
    constructor(model: M | any);
    setModel(model: M | any): void;
    findById(team: string, relations?: string[]): Promise<M>;
    updateById(team: string, data: Partial<M>, trx?: Transaction): Promise<M>;
    save(data: Partial<T>, transaction?: Transaction): Promise<M>;
    saveBulk(data: Partial<T[]>, transaction?: Transaction): Promise<M>;
    getAll(): Promise<any>;
    getAllWithRelations(relations?: string[]): Promise<any>;
    deleteById(id: string): Promise<any>;
    findByName(name: string): Promise<any>;
    findByEmail(email: string): Promise<any>;
    findOne(filter: ObjectLiteral): Promise<T | undefined>;
    findOneWhere(filter: ObjectLiteral): Promise<T | undefined>;
    findWhere(filter: ObjectLiteral, relations?: string[]): Promise<T[]>;
    findOrWhere(filter: ObjectLiteral, orFilter?: ObjectLiteral, andFilter?: ObjectLiteral): Promise<T | undefined>;
}
