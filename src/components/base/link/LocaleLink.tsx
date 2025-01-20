'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ComponentProps } from 'react';

interface LocaleLinkProps extends Omit<ComponentProps<typeof Link>, 'href'> {
  href: string;
}

const LocaleLink = ({ href, children, ...props }: LocaleLinkProps) => {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang');

  // Add language parameter to href if it exists
  const finalHref = lang ? `${href}?lang=${lang}` : href;

  return (
    <Link href={finalHref} {...props}>
      {children}
    </Link>
  );
};

export default LocaleLink;

