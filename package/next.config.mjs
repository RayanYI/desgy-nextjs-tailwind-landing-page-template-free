/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // On garde les configs pour ignorer les erreurs de build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // On dit à Next.js de ne pas essayer de bundler ces librairies capricieuses
  serverExternalPackages: ["jsdom"],
}

export default nextConfig;