/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'blog-cms',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
          },
        ],
      },
};

export default nextConfig;
