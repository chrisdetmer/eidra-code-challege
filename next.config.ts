// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
  
// };

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.API_URL}/:path*`, // Proxy to your API
            },
        ];
    },
};


//export default nextConfig;
