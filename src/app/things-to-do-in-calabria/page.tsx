'use client';

import { Suspense } from 'react';
import Content from '@/components/base/content/Content';
import Heading from '@/components/base/heading/Heading';
import TextImage from '@/components/base/text-and-image/TextImage';
import { images } from '@/config/images';
import TranslationProvider from '@/components/base/translation/TranslationProvider';
import './page.css';

function ThingsToDoContent() {
  return (
    <TranslationProvider>
      {(t) => (
        <div className="things-to-do-page page">
          <Content backgroundColor="#332c2a">
            <section className="things-to-do-section">
              <Heading level={2} color="#FFECD9">{t.thingsToDo.title}</Heading>
              <TextImage
                imageUrl={images.tropea}
                imageAlt="Tropea"
                title={t.thingsToDo.coastOfGods.title}
                text={t.thingsToDo.coastOfGods.text}
                imagePosition="right"
              />
              <TextImage
                imageUrl={images.scilla}
                imageAlt="Scilla"
                title={t.thingsToDo.scilla.title}
                text={t.thingsToDo.scilla.text}
                imagePosition="left"
              />
              <TextImage
                imageUrl={images.arcella}
                imageAlt="San Nicola Arcella"
                title={t.thingsToDo.sanNicolaArcella.title}
                text={t.thingsToDo.sanNicolaArcella.text}
                imagePosition="right"
              />
              <TextImage
                imageUrl={images.castello}
                imageAlt="Le Castella"
                title={t.thingsToDo.ionianCoast.title}
                text={t.thingsToDo.ionianCoast.text}
                imagePosition="left"
              />
              <TextImage
                imageUrl={images.sila}
                imageAlt="Sila National Park"
                title={t.thingsToDo.nationalParks.title}
                text={t.thingsToDo.nationalParks.text}
                imagePosition="right"
              />
            </section>
          </Content>
        </div>
      )}
    </TranslationProvider>
  );
}

export default function ThingsToDo() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThingsToDoContent />
    </Suspense>
  );
}