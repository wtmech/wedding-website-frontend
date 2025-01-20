'use client';

import { useEffect } from 'react';
import { warmupServer } from '@/utils/warmupServer';
import { images } from '@/config/images';
import Hero from '@/components/layout/hero/Hero'
import Content from '@/components/base/content/Content'
import Heading from '@/components/base/heading/Heading'
import { useTranslation } from '@/hooks/useTranslation';

interface WeddingDetail {
  title: string;
  value: string;
  time?: string;
  dateAndTime?: string;
}

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    warmupServer();
  }, []);

  const weddingDetails: WeddingDetail[] = [
    {
      title: t.home.weddingDetails.date.title,
      value: t.home.weddingDetails.date.dateAndTime,
      time: t.home.weddingDetails.date.time
    },
    {
      title: t.home.weddingDetails.venue.title,
      value: `${t.home.weddingDetails.venue.name}, ${t.home.weddingDetails.venue.address}`,
    },
    {
      title: t.home.weddingDetails.dress.title,
      value: t.home.weddingDetails.dress.text,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero
        imageUrl={images.proposal}
        title="Billy & Katia"
        subtitle={`${t.home.weddingDetails.date.value} ${t.common.at} ${t.home.weddingDetails.date.time}`}
      />
      <Content backgroundColor="#332c2a">
        <div className="text-image-block">
          <div className="text-image-block__content">
            <div className="text-image-block__text">
              <Heading level={2} color="#FFECD9">{t.home.weddingDetails.title}</Heading>
              {weddingDetails.map((detail, index) => (
                <div key={index} className="mb-8 text-block">
                  <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
                  {detail.title === t.home.weddingDetails.venue.title ? (
                    <>
                      <p className="text-lg">{t.home.weddingDetails.venue.name}</p>
                      <p className="text-lg">{t.home.weddingDetails.venue.address}</p>
                    </>
                  ) : (
                    <p className="text-lg">{detail.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Content>
    </main>
  )
}