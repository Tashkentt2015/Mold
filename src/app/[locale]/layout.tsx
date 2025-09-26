import {NextIntlClientProvider} from 'next-intl';
import {defaultLocale, locales} from '@/lib/i18n';
import './globals.css';

export function generateStaticParams(){ return locales.map(l=>({locale:l})); }
export const dynamic = 'force-static';

export default async function RootLayout({
  children, params: {locale}
}:{children:React.ReactNode; params:{locale:string}}){
  let messages;
  try{ messages=(await import(`@/messages/${locale}.json`)).default; }
  catch{ messages=(await import(`@/messages/${defaultLocale}.json`)).default; }
  return (
    <html lang={locale}>
      <body><NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider></body>
    </html>
  );
}
