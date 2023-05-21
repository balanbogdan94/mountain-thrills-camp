/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zeropointstorage.blob.core.windows.net',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
