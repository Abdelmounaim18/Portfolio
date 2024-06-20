/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.microlink.io",
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
