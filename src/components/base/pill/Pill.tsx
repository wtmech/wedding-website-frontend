'use client';

import './Pill.css';

interface PillProps {
  date: string;
  day: string;
  time: string;
  location: string;
}

function Pill({ date, day, time, location }: PillProps) {
  return (
    <div className="pill">
        <div className="pill-date">
          <span>{date}</span>
          <span>{day}</span>
        </div>
        <div className="pill-separator" />
        <div className="pill-time">
          <span>{time}</span>
          <span>{location}</span>
        </div>
      </div>
  );
}

export default Pill;