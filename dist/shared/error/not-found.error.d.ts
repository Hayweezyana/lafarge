import AppError from "./app.error";
export default class NotFoundError extends AppError {
    constructor(message?: string);
}
