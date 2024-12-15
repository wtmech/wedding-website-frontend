'use client';

import { useState, useEffect } from 'react';
import { CountdownProps, TimeLeft } from './types';
import { calculateTimeLeft } from './utils';
import './Countdown.css';

function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (Object.values(newTimeLeft).every(value => value === 0)) {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => String(num).padStart(2, '0');

  if (isComplete) {
    return (
      <div className="countdown-complete">
        <span>The big day is here! Let&apos;s celebrate love! 🎉</span>
      </div>
    );
  }

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span className="countdown-number">{formatNumber(timeLeft.days)}</span>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <span className="countdown-number">{formatNumber(timeLeft.hours)}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <span className="countdown-number">{formatNumber(timeLeft.minutes)}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <span className="countdown-number">{formatNumber(timeLeft.seconds)}</span>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  );
}

export default Countdown;