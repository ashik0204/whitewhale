// Simple API URL configuration without process.env

// Function to get the API base URL
export const getApiBaseUrl = () => {
  // For development, use localhost:3001 
  // For production, use the same origin
  
  // The most reliable way to check if we're on localhost
  const isLocalhost = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';
  
  // If local development, API is likely on port 3001
  if (isLocalhost) {
    return 'http://localhost:3001';
  }
  
  // In production, API is on the same origin
  return window.location.origin;
};

// Function to get the URL for an uploaded image
export const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  
  // If it's already a full URL, use it
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // For paths starting with /uploads/, prepend the API server URL
  if (imagePath.startsWith('/uploads/')) {
    return `${getApiBaseUrl()}${imagePath}`;
  }
  
  // If it's just a filename, assume it's in uploads
  if (!imagePath.includes('/')) {
    return `${getApiBaseUrl()}/uploads/${imagePath}`;
  }
  
  // Default case
  return imagePath;
};
