'use client'

import Image from 'next/image';
import Pill from '@/components/base/pill/Pill';
import Countdown from '@/components/base/countdown/Countdown';
import Heading from '@/components/base/heading/Heading';
import { useTranslation } from '@/components/base/translation/TranslationProvider';
import { HeroProps } from './types';
import "./Hero.css";

function Hero({ imageUrl, title, subtitle }: HeroProps) {
  const { t } = useTranslation();
  const weddingDate = "2025-07-03T18:30:00+02:00";

  return (
    <div className="hero">
      <Countdown targetDate={weddingDate} />
      <div className="hero-content">
        {title && subtitle && (
          <div className="hero-title">
            <Heading level={2}>{title}</Heading>
          </div>
        )}
        <Pill
          date={t.home.weddingDetails.date.value}
          day="Thursday"
          time={t.home.weddingDetails.date.time}
          location={t.home.weddingDetails.venue.name}
        />
      </div>
      <Image
        src={imageUrl}
        alt="Billy and Katia's Wedding"
        fill
        priority
        className="hero-image"
        style={{ objectFit: 'cover', objectPosition: '44% center' }}
      />
    </div>
  );
}

export default Hero;