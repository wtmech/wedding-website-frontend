'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import en from '@/locales/en.json';
import it from '@/locales/it.json';
import { Translations } from '@/types/translations';

export function useTranslation() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentLang = searchParams.get('lang') || 'en';
  const t = (currentLang === 'it' ? it : en) as Translations;

  useEffect(() => {
    // Only check browser language on first load (when no lang param is set)
    if (!searchParams.has('lang')) {
      const browserLang = navigator.language.toLowerCase();
      const shouldBeItalian = browserLang.startsWith('it');

      // If browser is set to Italian but we're not showing Italian, update URL
      if (shouldBeItalian && currentLang !== 'it') {
        const params = new URLSearchParams(searchParams);
        params.set('lang', 'it');
        router.push(`${window.location.pathname}?${params.toString()}`);
      }
    }
  }, [searchParams, router, currentLang]);

  return { t, currentLang };
}