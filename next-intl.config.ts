import {defineConfig} from 'next-intl';
import {defaultLocale, locales} from './src/lib/i18n';

export default defineConfig({
  locales,
  defaultLocale
});