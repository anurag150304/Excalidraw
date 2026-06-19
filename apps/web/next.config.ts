import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    SOCKET_URL: process.env.SOCKET_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;
