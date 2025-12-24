import { useEffect, useState } from 'react';

/**
 * Tracks when the page is fully ready to display
 * - Waits for document ready state
 * - Ensures minimum loading time for smooth UX
 * - Has fallback timeout to prevent infinite loading
 */
export function usePageReady(minDisplayTimeMs: number = 2500): boolean {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    const startTime = Date.now();

    const makeReady = () => {
      if (mounted) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minDisplayTimeMs - elapsedTime);

        if (remainingTime > 0) {
          setTimeout(() => {
            if (mounted) setIsReady(true);
          }, remainingTime);
        } else {
          setIsReady(true);
        }
      }
    };

    const checkReady = () => {
      // Check if document is complete or interactive
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        makeReady();
      }
    };

    // Check immediately in case already loaded
    checkReady();

    // Listen for load and DOM ready events
    const handleLoad = () => makeReady();
    const handleDOMReady = () => makeReady();
    
    window.addEventListener('load', handleLoad);
    window.addEventListener('DOMContentLoaded', handleDOMReady);
    document.addEventListener('readystatechange', checkReady);

    // Fallback timeout - ensure loader never stays forever (max 5 seconds)
    const fallbackTimer = setTimeout(() => {
      if (mounted && !isReady) {
        makeReady();
      }
    }, 5000);

    return () => {
      mounted = false;
      clearTimeout(fallbackTimer);
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('DOMContentLoaded', handleDOMReady);
      document.removeEventListener('readystatechange', checkReady);
    };
  }, [minDisplayTimeMs]);

  return isReady;
}
