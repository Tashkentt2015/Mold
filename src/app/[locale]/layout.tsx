import type {ReactNode} from "react";
import {NextIntlClientProvider} from "next-intl";
import {defaultLocale, locales} from "@/lib/i18n";
import LangSwitcher from "@/components/LangSwitcher";

export function generateStaticParams(){ return locales.map(l=>({locale:l})); }
export const dynamic = "force-static";

export default async function RootLayout({
  children, params
}:{children:ReactNode; params:Promise<{locale:string}>}){
  const {locale}=await params;
  let messages;
  try{ messages=(await import(`@/messages/${locale}.json`)).default; }
  catch{ messages=(await import(`@/messages/${defaultLocale}.json`)).default; }
  return (
    <html lang={locale}>
      <body className="container mx-auto p-6 grid gap-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Silikon Kalıplar</h1>
          <LangSwitcher/>
        </header>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <footer className="py-8 text-sm opacity-70">
          Minimum özel sipariş: ₺12.500. 3D model dahildir.
        </footer>
      </body>
    </html>
  );
}