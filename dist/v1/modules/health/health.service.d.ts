import RedisClient from "@shared/redis-client/redis-client";
import { Response } from "express";
declare class HealthService {
    private redisClient;
    constructor(redisClient: RedisClient);
    readinessCheck(reply: Response): Promise<void>;
    livelinessCheck(reply: Response): void;
    private checkPostgresHealth;
    private checkRedisHealth;
}
export default HealthService;
