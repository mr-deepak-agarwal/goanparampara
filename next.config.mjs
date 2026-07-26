/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "goanparampara.com",
      },
    ],
  },
};

export default nextConfig;
