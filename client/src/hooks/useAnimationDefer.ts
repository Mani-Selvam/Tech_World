import { useEffect, useState } from 'react';

/**
 * Defers animations until after the page is fully painted (LCP).
 * Returns true when animations should be enabled.
 */
export function useAnimationDefer(delayMs: number = 2000): boolean {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    // Check if page is already loaded
    if (document.readyState === 'complete') {
      const timer = setTimeout(() => setAnimationsEnabled(true), delayMs);
      return () => clearTimeout(timer);
    }

    // Wait for page load, then defer animations
    const handleLoad = () => {
      const timer = setTimeout(() => setAnimationsEnabled(true), delayMs);
      return timer;
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [delayMs]);

  return animationsEnabled;
}
