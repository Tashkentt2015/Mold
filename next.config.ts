import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
  eslint: { ignoreDuringBuilds: true },      // временно
  typescript: { ignoreBuildErrors: true },   // временно
};

export default nextConfig;
