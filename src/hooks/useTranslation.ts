import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    const keys = key.split('.');
    let current: Record<string, unknown> = translations[language];

    for (const k of keys) {
      current = current?.[k] as Record<string, unknown>;
    }

    return typeof current === 'string' ? current : key;
  };

  return { t, language };
}
