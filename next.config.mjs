/** @type {import('next').NextConfig} */
const nextConfig = {
  //   experimental: {
  //     appDir: true,
  //     serverComponentsExternalPackages: ["mongoose"],
  //   },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
