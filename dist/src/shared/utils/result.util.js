"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(isSuccess, value, error) {
        Object.defineProperty(this, "isSuccess", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isFailure", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.value = value;
        this.error = error;
        Object.freeze(this);
    }
    getValue() {
        return this.value;
    }
    static ok(value) {
        return new Result(true, value);
    }
    static err(error) {
        return new Result(false, null, error);
    }
}
exports.Result = Result;
//# sourceMappingURL=result.util.js.map