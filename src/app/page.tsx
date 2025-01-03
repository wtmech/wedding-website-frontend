'use client';

import { useEffect } from 'react';
import { warmupServer } from '@/utils/warmupServer';
import { images } from '@/config/images';
import Hero from '@/components/layout/hero/Hero'
import Content from '@/components/base/content/Content'
import Heading from '@/components/base/heading/Heading'

interface WeddingDetail {
  title: string;
  date?: string;
  time?: string;
  name?: string;
  address?: string;
  text?: string;
}

interface WeddingDetails {
  [key: string]: WeddingDetail;
}

export default function Home() {
  useEffect(() => {
    warmupServer();
  }, []);

  const weddingDetails = {
    date: {
      title: "Date",
      date: "July 3, 2025",
      time: "6:00pm"
    },
    venue: {
      title: "Ceremony & Reception Venue",
      name: "Villa Grandinetti",
      address: "SS 18 Tirrena Inferiore, 7, 88047 Nocera Terinese CZ, Italy"
    },
    dress: {
      title: "Dress",
      text: "Formal Attire"
    }
  }

  const renderDetails = (details: WeddingDetails) => (
  <div className="details-section">
    {Object.entries(details).map(([key, value]: [string, WeddingDetail]) => (
      <div key={key}>
        <Heading level={3} color="#FFECD9">{value.title}</Heading>
        {value.date && <p>{value.date} at {value.time}</p>}
        {value.name && <p>{value.name}</p>}
        {value.address && <p>{value.address}</p>}
        {value.text && <p>{value.text}</p>}
      </div>
    ))}
  </div>
);

  return (
    <main>
      <Hero
        imageUrl={images.proposal}
        title="Billy"
        subtitle="Katia"
      />
      <Content backgroundColor="#332c2a">
        <div className="text-image-block right">
          <div className="text-image-block__content">
            <div className="text-image-block__text">
              <Heading level={2} color="#FFECD9">Wedding Details</Heading>
              {renderDetails(weddingDetails)}
            </div>
            <div
              className="text-image-block__image"
              style={{ backgroundImage: 'url(/hero.JPEG)' }}
              role="img"
              aria-label="Wedding Details"
            />
          </div>
        </div>
      </Content>
    </main>
  )
}