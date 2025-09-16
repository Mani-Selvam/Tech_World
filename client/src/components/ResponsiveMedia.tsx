import { cn } from '@/lib/utils';

interface ResponsiveMediaProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  aspectRatio?: 'square' | 'video' | 'auto';
  objectFit?: 'contain' | 'cover' | 'fill';
  maxHeight?: string;
}

export function ResponsiveMedia({
  src,
  alt,
  className,
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async',
  aspectRatio = 'auto',
  objectFit = 'contain',
  maxHeight
}: ResponsiveMediaProps) {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: ''
  };

  const objectFitClasses = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill'
  };

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      sizes={sizes}
      className={cn(
        'max-w-full h-auto',
        aspectRatioClasses[aspectRatio],
        objectFitClasses[objectFit],
        className
      )}
      style={maxHeight ? { maxHeight } : undefined}
    />
  );
}