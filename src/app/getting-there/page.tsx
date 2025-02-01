'use client';

import { Suspense } from 'react';
import Content from '@/components/base/content/Content';
import Heading from '@/components/base/heading/Heading';
import Hotel from '@/components/base/hotel/Hotel';
import TranslationProvider from '@/components/base/translation/TranslationProvider';
import './page.css';

function GettingThereContent() {
  return (
    <TranslationProvider>
      {(t) => (
        <div className="getting-there-page page">
          <Content backgroundColor="#332c2a">
            <section className="getting-there-section">
              <Heading level={2} color="#FFECD9">{t.gettingThere.title}</Heading>

              <div className="shuttle-notice">
                <p><strong>A shuttle will be provided the day of the wedding to the venue and from the venue if you are staying at any of the hotels listed below. Transportation after or before the wedding will be up to you.</strong></p>
              </div>

              <div className="section getting-there-plane">
                <Heading level={3} color="#FFECD9">{t.gettingThere.byPlane.title}</Heading>
                <p>
                  {t.gettingThere.byPlane.text} <strong>
                    <a
                      href="https://www.google.com/search?q=Lamezia+Terme+International+Airport"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {t.gettingThere.byPlane.airport}
                    </a>
                  </strong>. {t.gettingThere.byPlane.rentalCars}
                </p>
              </div>

              <div className="section getting-there-train">
                <Heading level={3} color="#FFECD9">{t.gettingThere.byTrain.title}</Heading>
                <p>
                  {t.gettingThere.byTrain.text} <strong>
                    <a href="https://www.italiarail.com/train-station/rome-termini-train-station" target="_blank" rel="noopener noreferrer" className="link">{t.gettingThere.byTrain.stations.termini}</a>
                  </strong> {t.common.and} <strong>
                    <a href="https://www.italiarail.com/train-station/rome-tiburtina-train-station-guide" target="_blank" rel="noopener noreferrer" className="link">{t.gettingThere.byTrain.stations.tiburtina}</a>
                  </strong> {t.gettingThere.byTrain.to} <strong>
                    <a href="https://www.rfi.it/en/stations/lamezia-terme-centrale.html" target="_blank" rel="noopener noreferrer" className="link">{t.gettingThere.byTrain.stations.lamezia}</a>
                  </strong>. {t.gettingThere.byTrain.companies.text} <strong>
                    <a href="https://www.italotreno.com/en" target="_blank" rel="noopener noreferrer" className="link">{t.gettingThere.byTrain.companies.italo}</a></strong> {t.common.and} <strong><a href="https://www.trenitalia.com/en.html" target="_blank" rel="noopener noreferrer" className="link">{t.gettingThere.byTrain.companies.trenitalia}</a>
                </strong>.
                </p>
              </div>

              <div className="section getting-there-car">
                <Heading level={3} color="#FFECD9">{t.gettingThere.byCar.title}</Heading>
                <p>
                  {t.gettingThere.byCar.fromCatanzaro}
                </p>
                <br />
                <p>
                  {t.gettingThere.byCar.fromMagisano}
                </p>
                <br />
                <strong><a href="https://www.google.com/maps/place/Villa+Grandinetti/@39.0074373,16.1217373,17z/data=!3m1!4b1!4m6!3m5!1s0x133fdd2e39b45c49:0xa1dfe416e157c3ca!8m2!3d39.0074332!4d16.1243122!16s%2Fg%2F1v2bn71l?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="link">{t.gettingThere.byCar.googleMaps}</a></strong>
              </div>
            </section>

            <section className="lodging-section">
              <Heading level={2} color="#FFECD9">{t.gettingThere.accommodation.title}</Heading>
              <span>{t.gettingThere.accommodation.distanceNote}</span>

              <div className="section four-star">
                <Heading level={3} color="#FFECD9">{t.gettingThere.accommodation.categories.fourStar}</Heading>
                <ul>
                  <li>
                    <Hotel
                      hotelUrl="https://www.hotelmarechiarogizzeria.com/"
                      target="_blank"
                      hotelName="Hotel Marechiaro"
                      hotelDistance="2.5 mi"
                      googleMapsUrl="https://www.google.com/travel/search?q=Hotel%20Marechiaro&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72741943%2C72749231%2C72760082%2C72778251%2C72808078%2C72825294&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTMzZmU2NGIwNWRhYzQ1ZDoweDlmMjdiNTAxZDE5YzVjZWQSGhIUCgcI6A8QCxgaEgcI6A8QCxgbGAEyAhAA&qs=CAEyFENnc0k3Ym54akoyZzdaT2ZBUkFCOAJCCQntXJzRAbUnn0IJCe1cnNEBtSef&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiY6omtxvOJAxUAAAAAHQAAAAAQBQ"
                    />
                  </li>
                  <li>
                    <Hotel
                      hotelUrl="https://www.hotellaprincipessa.it/"
                      target="_blank"
                      hotelName="Hotel La Principessa"
                      hotelDistance="3.7 mi"
                      googleMapsUrl="https://www.google.com/travel/search?q=Hotel%20La%20Principessa%20calabria&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72741943%2C72749231%2C72760082%2C72778251%2C72808078%2C72825294&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTMzZmMzMDFjNjgwNGUyOToweGJjOTg2ZjU0MmM5YzRlMzQSGhIUCgcI6A8QDBgGEgcI6A8QDBgHGAEyAhAA&qs=CAEyFENnc0l0Snp4NU1McW04eThBUkFCOAJCCQk0TpwsVG-YvEIJCTROnCxUb5i8&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiYv5KKyfOJAxUAAAAAHQAAAAAQBQ"
                    />
                  </li>
                </ul>
              </div>

              <div className="section three-star">
                <Heading level={3} color="#FFECD9">{t.gettingThere.accommodation.categories.threeStar}</Heading>
                <ul>
                  <li>
                    <Hotel
                      hotelUrl="https://www.lionshotel.it/"
                      target="_blank"
                      hotelName="Lions Hotel"
                      hotelDistance="1.2 mi"
                      googleMapsUrl="https://www.google.com/travel/search?q=Lions%20Hotel%20calabria&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72741943%2C72749231%2C72760082%2C72778251%2C72808078%2C72825294&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTMzZmRkMmQxMjViYmEzYjoweGEzMzExMjQ3YjVjMmUyNGUSGhIUCgcI6A8QDBgGEgcI6A8QDBgHGAEyAhAA&qs=CAEyFENnc0l0Snp4NU1McW04eThBUkFCOAJCCQk0TpwsVG-YvEIJCTROnCxUb5i8&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiYv5KKyfOJAxUAAAAAHQAAAAAQBQ"
                      bookingEmail="info@lionshotel.it"
                    />
                  </li>
                  <li>
                    <Hotel
                      hotelUrl="https://www.booking.com/hotel/it/palace-una-nuova-strada.html?aid=356980&label=gog235jc-1DCAsocUIXcGFsYWNlLXVuYS1udW92YS1zdHJhZGFIM1gDaJMCiAECmAExuAEHyAEN2AED6AEB-AECiAIBqAIDuAKi14u8BsACAdICJGQ3YjAxMmNiLThlNWYtNDIwNC1hZDYwLWUyYjMxYzIwNmQ0ZNgCBOACAQ&sid=9fda86aefe54ed276566dc26c82d30ce&all_sr_blocks=33462102_88171572_0_42_0&checkin=2025-07-02&checkout=2025-07-04&dest_id=-123080&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=33462102_88171572_0_42_0&hpos=1&matching_block_id=33462102_88171572_0_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=33462102_88171572_0_42_0__14450&srepoch=1736633253&srpvid=29069b91da6d055d&type=total&ucfs=1&/"
                      target="_blank"
                      hotelName="Palace Hotel Una Nuova Strada"
                      hotelDistance="1.2 mi"
                      googleMapsUrl="https://www.google.com/travel/search?q=Palace%20Hotel%20Una%20Nuova%20Strada&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72560029%2C72573224%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72760082%2C72803964%2C72808078%2C72825294%2C72832976%2C72847697%2C72855368&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaSQopEicyJTB4MTMzZmRkMmQxMjViYmEzYjoweGEzMzExMjQ3YjVjMmUyNGUSHBIUCgcI6Q8QARgQEgcI6Q8QARgRGAEyBAgAEAAqBwoFOgNVU0Q&qs=CAEyFENnc0l6c1NMcnZ2SXhKaWpBUkFCOAJCCQlO4sK1RxIxo0IJCU7iwrVHEjGjSAA&ap=MAC6AQdyZXZpZXdz&ictx=111"
                    />
                  </li>
                  <li>
                    <Hotel
                      hotelUrl="https://www.hotelristorantesangiovanni.it/it/"
                      target="_blank"
                      hotelName="San Giovanni"
                      hotelDistance="1.4 mi"
                      googleMapsUrl="https://www.google.com/travel/search?q=Hotel%20San%20Giovanni%20Pucci&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825294%2C72832976%2C72852859%2C72853164%2C72855368&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTMzZmU3ZmIyMTcyMTgwNzoweGVmOWMxNjAzZGUwZmU2NmMSGhIUCgcI6Q8QAhgBEgcI6Q8QAhgCGAEyAhAA&qs=CAEyFENnc0k3TXlfOEwzQWhjN3ZBUkFCOAJCCQls5g_eAxac70IJCWzmD94DFpzv&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiY8YqtiIOLAxUAAAAAHQAAAAAQBQ"
                      bookingEmail="info@hotelristorantesangiovanni.it"
                    />
                  </li>
                </ul>
              </div>

              <div className="section bed-and-breakfast">
                <Heading level={3} color="#FFECD9">{t.gettingThere.accommodation.categories.bedAndBreakfast}</Heading>
                <ul>
                  <li>
                    <Hotel
                      hotelUrl="https://www.esperienzecrialesi.it/"
                      target="_blank"
                      hotelName="Crialesi Boutique Room"
                      hotelDistance="0.6 mi"
                      googleMapsUrl="https://www.google.com/travel/search?q=Crialesi%20Boutique%20Room&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72741943%2C72749231%2C72760082%2C72778251%2C72808078%2C72825294&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4MTMzZmRkNDExNTM1YWM3MzoweGJhYzIxZjlmYTlkYWRjMxIaEhQKBwjoDxALGBgSBwjoDxALGBkYATICEAA&qs=CAEyE0Nnb0l3OXYyMUotX2lOWUxFQUU4AkIJCcOtnfr5IawLQgkJw62d-vkhrAs&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiYzb35zfOJAxUAAAAAHQAAAAAQBQ"
                    />
                  </li>
                </ul>
              </div>
            </section>
          </Content>
        </div>
      )}
    </TranslationProvider>
  );
}

export default function GettingThere() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GettingThereContent />
    </Suspense>
  );
}