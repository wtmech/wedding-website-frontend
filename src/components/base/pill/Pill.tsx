'use client';

import { PillProps } from './types';
import "./Pill.css";

function Pill({
  date,
  day,
  time,
  location
}: PillProps) {
  return (
    <div className="pill">
      <div className="pill-date">
        <span>{day}</span>
        <span>{date}</span>
      </div>
      <span className="pill-separator" />
      <div className="pill-time">
        <span>{time}</span>
        <span>{location}</span>
      </div>
    </div>
  );
}

export default Pill;