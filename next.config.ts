import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Necessário para GitHub Pages
  },
  basePath: isProd ? "/samukaz" : "", // Usa "/samukaz" apenas em produção
  assetPrefix: isProd ? "/samukaz" : "", // Prefixo para assets estáticos
};

export default nextConfig;
