import nextTranslate from 'next-translate'

const nextConfig = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
  },
});

export default nextConfig;
