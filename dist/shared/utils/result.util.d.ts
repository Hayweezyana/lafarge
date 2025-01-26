export declare class Result<T> {
    isSuccess: boolean;
    isFailure: boolean;
    private value?;
    error?: Error;
    private constructor();
    getValue(): T;
    static ok<U>(value?: U): Result<U>;
    static err<U>(error: Error): Result<U>;
}
