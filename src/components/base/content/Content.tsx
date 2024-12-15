import { ContentProps } from './types';
import './Content.css';

function Content({
  backgroundColor = '#fff',
  children
}: ContentProps) {
  return (
    <div
      className="content"
      style={{ backgroundColor }}
    >
      <div className="content__inner">
        {children}
      </div>
    </div>
  );
}

export default Content;