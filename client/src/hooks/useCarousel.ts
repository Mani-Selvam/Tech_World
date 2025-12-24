import { useEffect, useState } from 'react';

export interface CarouselImage {
  src: string;
  label: string;
}

/**
 * Manages carousel state with automatic rotation
 * Respects animation preferences and mobile devices
 */
export function useCarousel(images: CarouselImage[], animationsEnabled: boolean) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    // Don't animate on mobile or when animations are disabled
    if (!animationsEnabled || window.innerWidth < 768) return;

    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [animationsEnabled, images.length]);

  return carouselIndex;
}
