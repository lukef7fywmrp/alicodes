/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
