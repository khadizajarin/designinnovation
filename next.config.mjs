/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gratisography.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ]
    }
};


export default nextConfig;
