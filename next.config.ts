import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rspneus.com.br',
        port: '',
        pathname: '/wp-content/uploads/**',
        search: '',
      },
    ],
  },
}
export default nextConfig;
