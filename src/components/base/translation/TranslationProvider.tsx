'use client';

import { ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import { translations } from '@/locales';
import type { Translations } from '@/locales/types';

export function useTranslation() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = translations[lang as keyof typeof translations];
  return { t, lang };
}

interface TranslationProviderProps {
  children: (t: Translations) => ReactNode;
}

export default function TranslationProvider({ children }: TranslationProviderProps) {
  const { t } = useTranslation();
  return <>{children(t)}</>;
}