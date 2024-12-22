import Image from 'next/image';
import Heading from '@/components/base/heading/Heading';
import './TextImage.css';

interface TextImageProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  text: string;
  imagePosition?: 'left' | 'right';
}

export default function TextImage({
  imageUrl,
  imageAlt,
  title,
  text,
  imagePosition = 'left'
}: TextImageProps) {
  return (
    <div className={`text-image-section ${imagePosition}`}>
      <Heading className="text-image-heading" level={3} color="#FFECD9">{title}</Heading>
      <div className="text-image-container">
        <div className="image-wrapper">
          <div className="image-container">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              className="text-image"
              priority
            />
          </div>
          <span className="image-caption">{imageAlt}</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
