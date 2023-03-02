

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
        domains: ["images.unsplash.com", "openweathermap.org"]
    },
  env: {
    DB_KEY: process.env.DB_KEY
  }
}

module.exports = nextConfig
