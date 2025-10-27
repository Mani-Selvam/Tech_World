import { cn } from '@/lib/utils';
import { CSSProperties } from 'react';

interface ResponsiveMediaProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'sync' | 'auto';
  aspectRatio?: 'square' | 'video' | 'auto';
  objectFit?: 'contain' | 'cover' | 'fill';
  maxHeight?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  'data-testid'?: string;
}

export function ResponsiveMedia({
  src,
  alt,
  className,
  sizes = '100vw',
  loading = 'lazy',
  fetchpriority,
  decoding = 'async',
  aspectRatio = 'auto',
  objectFit = 'contain',
  maxHeight,
  width,
  height,
  style,
  'data-testid': dataTestId
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

  const imgProps: any = {
    src,
    alt,
    loading,
    decoding,
    sizes,
    className: cn(
      'max-w-full h-auto',
      aspectRatioClasses[aspectRatio],
      objectFitClasses[objectFit],
      className
    ),
    style: maxHeight ? { maxHeight, ...style } : style,
    'data-testid': dataTestId
  };

  if (width) {
    imgProps.width = width;
  }

  if (height) {
    imgProps.height = height;
  }

  if (fetchpriority) {
    imgProps.fetchpriority = fetchpriority;
  }

  return <img {...imgProps} />;
}