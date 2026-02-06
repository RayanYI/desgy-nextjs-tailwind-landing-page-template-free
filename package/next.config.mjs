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
  // 👇 C'est ici qu'on force Vercel à laisser ces librairies tranquilles
  serverExternalPackages: ["jsdom", "html-encoding-sniffer", "@exodus/bytes"],
}

export default nextConfig;