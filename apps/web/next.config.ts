import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    JWT_SECRET: process.env.JWT_SECRET
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
