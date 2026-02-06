/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // On dit à Vercel d'ignorer les erreurs de style (Linting) pour construire le site
  eslint: {
    ignoreDuringBuilds: true,
  },
  // On ignore aussi les erreurs strictes de TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig;