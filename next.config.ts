import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/profil-public",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
