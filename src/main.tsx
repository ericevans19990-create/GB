
import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Performance optimization: Preload critical resources
const preloadCriticalResources = () => {
  // Preload critical images with optimized loading
  const criticalImages = [
    '/images/logo.svg'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
  
  // Preload critical CSS
  const criticalCSS = document.createElement('link');
  criticalCSS.rel = 'preload';
  criticalCSS.as = 'style';
  criticalCSS.href = '/src/index.css';
  document.head.appendChild(criticalCSS);
};

// Optimize performance with requestIdleCallback
const scheduleWork = (callback: () => void) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout: 1000 });
  } else {
    setTimeout(callback, 0);
  }
};

// Initialize performance optimizations
scheduleWork(preloadCriticalResources);

// Optimize React rendering with concurrent features
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement, {
  // Enable concurrent features for better performance
  identifierPrefix: 'glorys-'
});

// Optimize initial render
const renderApp = () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// Use scheduler for better performance
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  scheduleWork(renderApp);
}

// Service Worker registration for caching (optimized)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  scheduleWork(() => {
    navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'imports'
    }).catch(() => {
      // Silently fail if service worker is not available
    });
  });
}

// Performance monitoring (development only)
if (import.meta.env.DEV) {
  scheduleWork(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', (entry as any).processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', (entry as any).value);
        }
      });
    });
    
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Browser doesn't support these metrics
    }
  });
}

// Optimize memory usage
window.addEventListener('beforeunload', () => {
  // Cleanup any remaining timers or observers
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        if (registration.active) {
          registration.active.postMessage({ type: 'CLEANUP' });
        }
      });
    });
  }
});
