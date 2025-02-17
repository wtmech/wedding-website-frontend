'use client';

import { Suspense } from 'react';
import Content from '@/components/base/content/Content';
import Heading from '@/components/base/heading/Heading';
import TranslationProvider from '@/components/base/translation/TranslationProvider';
import './page.css';

function WeddingGiftContent() {
  return (
    <TranslationProvider>
      {(t) => (
        <div className="wedding-gift-page page">
          <Content backgroundColor="#332c2a">
            <section className="wedding-gift-section">
              <Heading level={2} color="#FFECD9">{t.weddingGift.title}</Heading>
              <p className="welcome-message">{t.weddingGift.welcomeMessage}</p>
              <p className="assistance-message">{t.weddingGift.assistanceMessage}</p>
              <p className="thank-you-message">{t.weddingGift.thankYouMessage}</p>

              <div className="bank-details">
                <div className="detail-row">
                  <span className="label">{t.weddingGift.bankDetails.ibanLabel}:</span>
                  <span className="value">{t.weddingGift.bankDetails.iban}</span>
                </div>

                <div className="detail-row">
                  <span className="label">{t.weddingGift.bankDetails.swiftLabel}:</span>
                  <span className="value">{t.weddingGift.bankDetails.swift}</span>
                </div>

                <div className="detail-row">
                  <span className="label">{t.weddingGift.bankDetails.bankLabel}:</span>
                  <span className="value">{t.weddingGift.bankDetails.bank}</span>
                </div>

                <div className="detail-row">
                  <span className="label">{t.weddingGift.bankDetails.addressLabel}:</span>
                  <span className="value">{t.weddingGift.bankDetails.address}</span>
                </div>

                <div className="detail-row">
                  <span className="label">{t.weddingGift.bankDetails.beneficiaryLabel}:</span>
                  <span className="value">{t.weddingGift.bankDetails.beneficiary}</span>
                </div>

                <div className="detail-row">
                  <span className="label">{t.weddingGift.bankDetails.referenceLabel}:</span>
                  <span className="value">{t.weddingGift.bankDetails.reference}</span>
                </div>
              </div>

              <div className="paypal-section">
                <a href="https://www.paypal.com/paypalme/wtmech" target="_blank" rel="noopener noreferrer" className="payment-link paypal-link">
                  PayPal
                </a>
                <a href="https://www.venmo.com/u/Billy-Mech" target="_blank" rel="noopener noreferrer" className="payment-link venmo-link">
                  Venmo
                </a>
              </div>
            </section>
          </Content>
        </div>
      )}
    </TranslationProvider>
  );
}

export default function WeddingGift() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeddingGiftContent />
    </Suspense>
  );
}