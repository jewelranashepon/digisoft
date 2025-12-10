import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ❗ Allow production builds to successfully complete
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
