import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = { experimental: {
    serverComponentsExternalPackages: ['@acme/ui'],
  },};

export default withNextIntl(nextConfig);
