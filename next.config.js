/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'cdn.pixabay.com',
      'api.example.com',
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
