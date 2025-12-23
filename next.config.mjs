/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-sanity', 'sanity', '@sanity/vision'],
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
