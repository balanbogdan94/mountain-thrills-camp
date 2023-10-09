/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zeropointstorage.blob.core.windows.net",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
