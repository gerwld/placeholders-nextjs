import type { NextConfig } from "next";
import withPlaiceholder from "@plaiceholder/next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/placeholders-nextjs",
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  }
};

export default withPlaiceholder(nextConfig);
