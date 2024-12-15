'use client';

import { HotelProps } from './types';
import './Hotel.css';

function Hotel({
  hotelUrl,
  target,
  hotelName,
  hotelDistance,
  googleMapsUrl
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