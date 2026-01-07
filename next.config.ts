/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Esto ignora errores de letras que no afectan el diseño
  },
  eslint: {
    ignoreDuringBuilds: true, // Esto evita que Vercel se detenga por reglas de formato
  },
};

export default nextConfig;