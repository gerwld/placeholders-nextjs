import type { NextConfig } from "next";
import withPlaiceholder from "@plaiceholder/next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com']
  }
};

export default withPlaiceholder(nextConfig);
