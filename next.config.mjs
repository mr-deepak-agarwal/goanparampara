/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "goanparampara.com",
      },
      {
        // Covers most S3-compatible buckets Medusa's file module uses.
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
      {
        // Railway Buckets asset storage, if you're using that for product images.
        protocol: "https",
        hostname: "**.railway.app",
      },
    ],
  },
};

export default nextConfig;
