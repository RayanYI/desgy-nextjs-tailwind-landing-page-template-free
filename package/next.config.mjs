/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  //LA LISTE COMPLÈTE (On met tout le monde d'accord)
  serverExternalPackages: [],
}

export default nextConfig;