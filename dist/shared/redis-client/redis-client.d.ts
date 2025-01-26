import Redis from "ioredis";
declare class RedisClient {
    private client;
    get(): Redis;
    private createClient;
}
export default RedisClient;
