/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "images.unsplash.com",
            "images.pexels.com",
            "www.pexels.com",
        ]
    },
    env: {
        NEXT_AUTH_URL: process.env.NEXT_AUTH_URL,
    },
};

export default nextConfig;
