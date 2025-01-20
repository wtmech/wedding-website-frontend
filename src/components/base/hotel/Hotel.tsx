'use client';

import { HotelProps } from './types';
import './Hotel.css';

function Hotel({
  hotelUrl,
  target,
  hotelName,
  hotelDistance,
  googleMapsUrl,
  bookingEmail
}: HotelProps) {
  return (
    <div className="hotel">
      <div className="hotel-name">
        <a
          href={hotelUrl}
          target={target}
          rel="noopener noreferrer"
          className="hotel-link"
        >
          {hotelName}
        </a>
        {bookingEmail && (
          <span className="booking-info">
            (Email <a href={`mailto:${bookingEmail}`} className="hotel-link">{bookingEmail}</a> to book for Katia and Billy&apos;s wedding.)
          </span>
        )}
      </div>
      <div className="hotel-distance">
        <span>{hotelDistance}</span>
        <span className="separator">|</span>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hotel-link"
        >
          Reviews
        </a>
      </div>
    </div>
  );
}

export default Hotel;