/** @type {import('next').NextConfig} */
const nextConfig = {
   env: {
    AUTH_TOKEN: process.env.AUTH_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn11.bigcommerce.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'd15k2d11r6t6rl.cloudfront.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;

