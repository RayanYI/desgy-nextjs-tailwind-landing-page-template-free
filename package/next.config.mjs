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
  // On garde juste jsdom par sécurité, mais sans les sous-librairies
  serverExternalPackages: ["jsdom"],
}

export default nextConfig;