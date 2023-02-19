/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'treehacksdrip.s3.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
