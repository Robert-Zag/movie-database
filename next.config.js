/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['m.media-amazon.com']
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
