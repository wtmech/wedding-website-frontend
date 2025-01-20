'use client';

import { Suspense } from 'react';
import Content from '@/components/base/content/Content';
import Heading from '@/components/base/heading/Heading';
import { useTranslation } from '@/hooks/useTranslation';

function NotFoundContent() {
  const { t } = useTranslation();

  return (
    <div className="not-found-page page">
      <Content backgroundColor="#332c2a">
        <section className="not-found-section">
          <Heading level={2} color="#FFECD9">{t.common.notFound.title}</Heading>
          <p>{t.common.notFound.text}</p>
        </section>
      </Content>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={
      <div className="not-found-page page">
        <Content backgroundColor="#332c2a">
          <section className="not-found-section">
            <Heading level={2} color="#FFECD9">Loading...</Heading>
          </section>
        </Content>
      </div>
    }>
      <NotFoundContent />
    </Suspense>
  );
}