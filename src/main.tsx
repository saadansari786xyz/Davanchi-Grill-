// Defensive patch for environments where window.fetch has only a getter
try {
  let fetchHolder = typeof window !== 'undefined' ? window.fetch : undefined;
  const patch = (obj: any) => {
    if (!obj) return;
    try {
      const desc = Object.getOwnPropertyDescriptor(obj, 'fetch');
      if (!desc || !desc.set) {
        Object.defineProperty(obj, 'fetch', {
          get: () => fetchHolder,
          set: (val) => {
            fetchHolder = val;
          },
          configurable: true,
          enumerable: true,
        });
      }
    } catch (_) {}
  };
  if (typeof window !== 'undefined') {
    patch(window);
    if (typeof Window !== 'undefined' && Window.prototype) {
      patch(Window.prototype);
    }
  }
} catch (_) {}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
