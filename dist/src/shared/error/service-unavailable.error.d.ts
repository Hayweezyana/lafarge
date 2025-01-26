import AppError from "./app.error";
export default class ServiceUnavailableError extends AppError {
    constructor(message?: string);
}
