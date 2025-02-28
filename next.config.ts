import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Necessário para GitHub Pages
  },
  basePath: "/samukaz",
  assetPrefix: "/samukaz",
};

export default nextConfig;
