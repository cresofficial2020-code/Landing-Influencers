/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Esto ayuda a que las animaciones carguen más rápido
  swcMinify: true,
};

export default nextConfig;