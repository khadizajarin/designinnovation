/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gratisography.com',
              },
        ]
    }
};

export default nextConfig;
