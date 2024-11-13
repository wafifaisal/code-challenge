/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
      },
    ],
    domains: ["randomuser.me"],
  },
};

module.exports = nextConfig;

