import nextMDX from "@next/mdx";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withMDX = nextMDX({ extension: /\.mdx?$/ });

/** @type {import('next').NextConfig} */
const config = {
  turbopack: { rules: {} },
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  images: { formats: ["image/avif", "image/webp"] },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return cfg;
  },
  // transpilePackages: ["your-internal-pkg"],
};

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(withMDX(config));
