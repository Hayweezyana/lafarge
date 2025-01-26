export declare const GetRandomID: (maxLength?: number) => string;
export declare const GetUUID: () => string;
export declare const createSha512Hash: (data: any, key: string) => string;
export declare const convertKeysToCamelCase: (obj: Object) => any;
export declare const formatAmountForDisplay: (amount: number, currency: string) => string;
export declare function generateCode(length: number): string;
export declare function generateDummyAccountNumber(): string;
export declare const generateToken: () => Promise<string>;
export declare const generateJwtToken: (user: any) => Promise<any>;
export declare function exportCSVData(headers: any, data: any): Promise<string>;
export declare const getAgeByDate: (dateString: string) => number;
export declare const getBirthYear: (dateString: string) => number;
export declare function validateEmail(input_str: string): boolean;
export declare function stringToSlug(str: string): string;
export declare function format_number(number: number, locale?: string): string;
export declare function isValidUUID(uuid: any): boolean;
