import { Knex as IKnex } from "knex/types";
export default function init(): void;
export declare function getKnexInstance(type: "primary" | "secondary"): IKnex<any, any[]>;
