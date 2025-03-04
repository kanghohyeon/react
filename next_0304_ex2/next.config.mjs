/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        
        return[
            {
                source: "/notice/:path*",
                destination:"http://localhost:8080/notice/:path*",

            },
            {
                source: "/bbs/:path*",
                destination:"http://localhost:8080/bbs/:path*",
                
            }
        ];
    }
};

export default nextConfig;
