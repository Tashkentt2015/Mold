// C:\Users\Art\mold\next.config.ts
import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {remotePatterns: [{protocol: 'https', hostname: '**'}]},
};

export default withNextIntl(nextConfig);