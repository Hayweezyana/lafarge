import { ObjectLiteral } from '../types/object-literal.type';
export declare const SuccessResponse: (message: string, data?: ObjectLiteral, meta?: ObjectLiteral) => {
    status: boolean;
    message: string;
    data: ObjectLiteral | undefined;
    meta: ObjectLiteral | undefined;
};
export declare const ErrorResponse: (message: string, errors?: any[]) => {
    status: boolean;
    message: string;
    errors: any[] | undefined;
};
