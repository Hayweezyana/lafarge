declare const appConfig: {
    app: {
        name: string | undefined;
        brand: string | undefined;
        env: import("./env.config").NODE_ENV;
    };
    server: {
        port: number;
    };
    redis: {
        host: string;
        port: number;
        password: string;
    };
    database: {
        DB_CLIENT: string | undefined;
        DB_URL: string;
    };
};
export default appConfig;
