import dotenv from "dotenv";
dotenv.config({
  path: "../../.env",
  debug: true,
  encoding: "utf8",
  override: true,
  quiet: true,
});

import { Redis } from "ioredis";

const globalRedis = global as unknown as { redis: Redis };

export const redisClient =
  globalRedis.redis ||
  new Redis({
    host: process.env.REDIS_HOST!,
    port: +process.env.REDIS_PORT!,
    password: process.env.REDIS_PASSWORD!,
  });

if (process.env.NODE_ENV !== "production") globalRedis.redis = redisClient;
