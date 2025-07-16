import dotenv from "dotenv";
dotenv.config({ path: "../../.env", debug: true, encoding: 'utf8', override: true, quiet: true });
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    SOCKET_URL: process.env.SOCKET_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
