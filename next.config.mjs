/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                hostname: 'source.unsplash.com'
            }
        ]
    }
};

export default nextConfig;
