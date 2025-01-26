export declare const bcryptHashString: (text: string) => Promise<string>;
export declare const bcryptCompareHashedString: (plainText: string, hashedText: string) => Promise<boolean>;
