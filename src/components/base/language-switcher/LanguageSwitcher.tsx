'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from '@/components/base/translation/TranslationProvider';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { lang } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (selectedLang === 'en') {
      params.delete('lang');
    } else {
      params.set('lang', selectedLang);
    }

    const query = params.toString();
    const newPath = query ? `${pathname}?${query}` : pathname;
    router.push(newPath);
  };

  return (
    <div className="language-switcher">
      <select
        className="language-select"
        value={lang}
        onChange={handleLanguageChange}
      >
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;