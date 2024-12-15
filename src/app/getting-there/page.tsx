import Content from '@/components/base/content/Content';
import Heading from '@/components/base/heading/Heading';
import Hotel from '@/components/base/hotel/Hotel';
import './page.css';

export default function GettingThere() {
  return (
    <div className="getting-there-page page">
      <Content backgroundColor="#332c2a">
        <section className="getting-there-section">
          <Heading level={2} color="#FFECD9">Getting There</Heading>
          <div className="section getting-there-plane">
            <Heading level={3} color="#FFECD9">By Plane:</Heading>
            <p>We recommend flying into <strong>
                <a
                  href="https://www.google.com/search?q=Lamezia+Terme+International+Airport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Lamezia Terme International Airport.
                </a>
              </strong>
            </p>
          </div>

          <div className="section getting-there-train">
            <Heading level={3} color="#FFECD9">By Train:</Heading>
            <p>
              From Rome, we recommend taking the train from <strong>
                <a href="https://www.italiarail.com/train-station/rome-termini-train-station" target="_blank" rel="noopener noreferrer" className="link">Rome Termini</a>
              </strong> or <strong>
                <a href="https://www.italiarail.com/train-station/rome-tiburtina-train-station-guide" target="_blank" rel="noopener noreferrer" className="link">Roma Tiburtina</a>
              </strong> to <strong>
                <a href="https://www.rfi.it/en/stations/lamezia-terme-centrale.html" target="_blank" rel="noopener noreferrer" className="link">Lamezia Terme Centrale.</a>
              </strong> The two train companies are <strong>
                <a href="https://www.italotreno.com/en" target="_blank" rel="noopener noreferrer" className="link">Italo</a></strong> and <strong><a href="https://www.trenitalia.com/en.html" target="_blank" rel="noopener noreferrer" className="link">Trenitalia</a>.
              </strong>
            </p>
          </div>

          <div className="section getting-there-car">
            <Heading level={3} color="#FFECD9">By Car:</Heading>
            <p>
              About 42 minutes driving from Catanzaro via SS280 dei Due Mari/E848 and A2/E45.
            </p>
            <br />
            <p>
              About 1 hour and 5 minutes driving from Magisano via SS280 dei Due Mari/E848.
            </p>
            <br />
            <strong><a href="https://www.google.com/maps/place/Villa+Grandinetti/@39.0074373,16.1217373,17z/data=!3m1!4b1!4m6!3m5!1s0x133fdd2e39b45c49:0xa1dfe416e157c3ca!8m2!3d39.0074332!4d16.1243122!16s%2Fg%2F1v2bn71l?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="link">Google Maps</a></strong>
          </div>
        </section>
      </Content>

      <Content backgroundColor="#332c2a">
        <section className="lodging-section">
          <Heading level={2} color="#FFECD9">Where to Stay </Heading>
          <span>(All distances are in relation to the venue)</span>
          <div className="section four-star">
            <Heading level={3} color="#FFECD9">Four Star Hotels</Heading>
            <ul>
              <li>
                <Hotel
                  hotelUrl="https://marechiaro.net/en/"
                  target="_blank"
                  hotelName="Marechiaro"
                  hotelDistance="7.4mi"
                  googleMapsUrl="https://www.google.com/travel/search?q=Hotel%20Marechiaro&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72741943%2C72749231%2C72760082%2C72778251%2C72808078%2C72825294&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTMzZmU2NGIwNWRhYzQ1ZDoweDlmMjdiNTAxZDE5YzVjZWQSGhIUCgcI6A8QCxgaEgcI6A8QCxgbGAEyAhAA&qs=CAEyFENnc0k3Ym54akoyZzdaT2ZBUkFCOAJCCQntXJzRAbUnn0IJCe1cnNEBtSef&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiY6omtxvOJAxUAAAAAHQAAAAAQBQ"
                />
              </li>
              <li>
                <Hotel
                  hotelUrl="https://www.hotellaprincipessa.it/"
                  target="_blank"
                  hotelName="Hotel La Principessa"
                  hotelDistance="3.7mi"
                  googleMapsUrl="https://www.google.com/travel/search?q=Hotel%20La%20Principessa%20calabria&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72741943%2C72749231%2C72760082%2C72778251%2C72808078%2C72825294&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTMzZmMzMDFjNjgwNGUyOToweGJjOTg2ZjU0MmM5YzRlMzQSGhIUCgcI6A8QDBgGEgcI6A8QDBgHGAEyAhAA&qs=CAEyFENnc0l0Snp4NU1McW04eThBUkFCOAJCCQk0TpwsVG-YvEIJCTROnCxUb5i8&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiYv5KKyfOJAxUAAAAAHQAAAAAQBQ"
                />
              </li>
            </ul>
          </div>
          <div className="section three-star">
            <Heading level={3} color="#FFECD9">Three Star Hotels</Heading>
            <ul>
              <li>
                <Hotel
                  hotelUrl="https://www.booking.com/hotel/it/acqua-marina-amp-restaurant.html"
                  target="_blank"
                  hotelName="Acquamarina Hotel"
                  hotelDistance="984 ft"
                  googleMapsUrl="https://www.google.com/travel/search?q=Acquamarina%20hotel%20calabria&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72741943%2C72749231%2C72760082%2C72778251%2C72808078%2C72825294&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTMzZmRkZGU4NWNiNzc0MzoweGJmYjJlODkwOWQwYTBiZTESGhIUCgcI6A8QCxgZEgcI6A8QCxgaGAEyAhAA&qs=CAEyFENnc0k0WmVvNkltU3V0bV9BUkFCOAJCCQnhCwqdkOiyv0IJCeELCp2Q6LK_&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiQ2PmjyvOJAxUAAAAAHQAAAAAQBQ"
                />
              </li>
              <li>
                <Hotel
                  hotelUrl="https://www.hotel-palace.it/"
                  target="_blank"
                  hotelName="Hotel Palace"
                  hotelDistance="1.2 mi"
                  googleMapsUrl="https://www.google.com/travel/search?q=Palace%20Hotel%20calabria&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72741943%2C72749231%2C72760082%2C72778251%2C72808078%2C72825294&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaHhIcEhQKBwjoDxALGBkSBwjoDxALGBoYATIECAAQACoHCgU6A1VTRA&qs=CAEyFENnc0k0TUhUeVA3XzBxT0RBUkFCOAhCCRGMMsqPJZuTKUIJEfNDgy1CKIPZQgkRlkVbqdiRl2FaVwgBMlOqAVAQASoQIgxwYWxhY2UgaG90ZWwoADIfEAEiG8PBA3_hZGmqtoNcYq4iY-BojM2iB4qZ-JwmfTIZEAIiFXBhbGFjZSBob3RlbCBjYWxhYnJpYWocChoNXA_IQhITCJG_k-bM84kDFbLuOgcd_6kONA&ap=MABoAboBB3Jldmlld3M&ictx=111&ved=0CAAQ5JsGahcKEwjIo9XpzPOJAxUAAAAAHQAAAAAQSA"
                />
              </li>
              <li>
                <Hotel
                  hotelUrl="https://www.lionshotel.it/"
                  target="_blank"
                  hotelName="Lion's Hotel"
                  hotelDistance="1.2 mi"
                  googleMapsUrl="https://www.google.com/travel/search?q=Hotel%20Lions%20calabria&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72741943%2C72749231%2C72760082%2C72778251%2C72808078%2C72825294&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTMzZmRkNmI4NzUyZjYwOToweDkzOGE5ZjZmZDg5Nzk0OTkSGhIUCgcI6Q8QARgFEgcI6Q8QARgGGAEyAhAA&qs=CAEyFENnc0l5YkxleFAzdHA4V1RBUkFCOAJCCQlJmZfYb5-Kk0IJCUmZl9hvn4qT&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwj4-pm3zfOJAxUAAAAAHQAAAAAQBQ"
                />
              </li>
            </ul>
          </div>

          <div className="section bed-and-breakfast">
            <Heading level={3} color="#FFECD9">Bed and Breakfast</Heading>
            <ul>
              <li>
                <Hotel
                  hotelUrl="https://www.esperienzecrialesi.it/"
                  target="_blank"
                  hotelName="Crialesi Boutique Room"
                  hotelDistance="3.1 mi"
                  googleMapsUrl="https://www.google.com/travel/search?q=Crialesi%20Boutique%20Room&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499705%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72741943%2C72749231%2C72760082%2C72778251%2C72808078%2C72825294&hl=en-US&gl=us&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4MTMzZmRkNDExNTM1YWM3MzoweGJhYzIxZjlmYTlkYWRjMxIaEhQKBwjoDxALGBgSBwjoDxALGBkYATICEAA&qs=CAEyE0Nnb0l3OXYyMUotX2lOWUxFQUU4AkIJCcOtnfr5IawLQgkJw62d-vkhrAs&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiYzb35zfOJAxUAAAAAHQAAAAAQBQ"
                />
              </li>
            </ul>
          </div>
        </section>
      </Content>
    </div>
  );
}