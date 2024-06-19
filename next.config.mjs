/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        domains: [
            "api.microlink.io", // Microlink Image Preview
        ],
    },
};

export default nextConfig;
