import { HeadingProps } from './types';
import './Heading.css';

function Heading({
  level = 1,
  children,
  className = '',
  align = 'left',
  color = 'inherit'
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`heading heading-${level} ${className}`}
      style={{
        textAlign: align,
        color: color
      }}
    >
      {children}
    </Tag>
  );
}

export default Heading;