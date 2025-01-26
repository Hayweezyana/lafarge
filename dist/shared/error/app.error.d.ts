import { ErrorCode } from "@shared/enums/error-code.enum";
export default class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    cause: Error | undefined;
    errorCode: ErrorCode;
    constructor(statusCode: number, message: any, cause?: any, isOperational?: boolean);
}
