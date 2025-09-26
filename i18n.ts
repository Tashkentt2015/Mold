import {getRequestConfig} from "next-intl/server";
import {defaultLocale, locales} from "./src/lib/i18n";

type SupportedLocale = typeof locales[number];

function isSupportedLocale(locale: string | undefined): locale is SupportedLocale {
  return locale !== undefined && locales.includes(locale as SupportedLocale);
}

async function loadMessages(locale: SupportedLocale){
  try{
    return (await import(`./src/messages/${locale}.json`)).default;
  }catch(error){
    if(locale!==defaultLocale){
      return (await import(`./src/messages/${defaultLocale}.json`)).default;
    }
    throw error;
  }
}

export default getRequestConfig(async ({locale}) => {
  const normalizedLocale: SupportedLocale = isSupportedLocale(locale) ? locale : defaultLocale;

  return {
    locale: normalizedLocale,
    messages: await loadMessages(normalizedLocale)
  };
});

export const config = {
  locales,
  defaultLocale
};