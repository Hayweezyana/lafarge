declare const appConfig: {
    app: {
        name: string | undefined;
        brand: string | undefined;
        env: import("./env.config").NODE_ENV;
    };
    server: {
        port: number;
    };
    database: {
        DB_CLIENT: string | undefined;
        DB_URL: string;
    };
};
export default appConfig;
