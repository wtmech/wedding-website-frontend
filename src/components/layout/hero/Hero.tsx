'use client'

import Image from 'next/image';
import Pill from '@/components/base/pill/Pill';
import Countdown from '@/components/base/countdown/Countdown';
import Heading from '@/components/base/heading/Heading';
import { HeroProps } from './types';
import "./Hero.css";

function Hero({ imageUrl, title, subtitle }: HeroProps) {
  const weddingDate = "2025-07-03T18:30:00+02:00";

  return (
    <div className="hero">
      <Countdown targetDate={weddingDate} />
      <div className="hero-content">
        {title && subtitle && (
          <div className="hero-title">
            <Heading level={2}>{title}</Heading>
            <span className="ampersand">&</span>
            <Heading level={2}>{subtitle}</Heading>
          </div>
        )}
        <Pill
          date="July 3, 2025"
          day="Thursday"
          time="6:00pm"
          location="Villa Grandinetti"
        />
      </div>
      <Image
        src={imageUrl}
        alt="Hero Image"
        fill
        priority
        className="hero-image"
        style={{ objectFit: 'cover', objectPosition: '15% center' }}
      />
    </div>
  );
}

export default Hero;