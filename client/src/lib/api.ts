/**
 * API Configuration Module
 * Handles environment-based API URL configuration for local, development, and production environments
 */

const getApiUrl = (): string => {
  // First check if VITE_API_URL env variable is set
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  // Fallback based on environment
  if (import.meta.env.DEV) {
    // Development: connect to local server on port 8000
    return 'http://localhost:8000';
  }

  // Production: use current domain
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};

export const API_URL = getApiUrl();

/**
 * Make API request with proper URL handling
 */
export async function apiCall<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Export for debugging
if (import.meta.env.DEV) {
  console.log('🔌 API URL:', API_URL);
}
