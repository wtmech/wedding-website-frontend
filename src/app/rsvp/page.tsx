'use client';

import { useState } from 'react';
import Content from '@/components/base/content/Content';
import Heading from '@/components/base/heading/Heading';
import RsvpForm from '@/components/layout/rsvp/RsvpForm';
import './page.css';

export default function Rsvp() {
  return (
    <div className="rsvp-page page">
      <Content backgroundColor="#332c2a">
        <section className="rsvp-section">
          <Heading level={2} color="#FFECD9">RSVP</Heading>
          <p className="rsvp-description">
            Please RSVP by May 25th, 2025. If you have any questions, feel free to contact us.
          </p>
          <RsvpForm />
        </section>
      </Content>
    </div>
  );
}