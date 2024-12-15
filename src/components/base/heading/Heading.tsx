import React from 'react';
import { HeadingProps } from './types';
import './Heading.css';

export default function Heading({
  level,
  children,
  className = '',
  color = 'inherit'
}: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <Tag
      className={`heading heading-${level} ${className}`}
      style={{ color }}
    >
      {children}
    </Tag>
  );
}