import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `is-visible` class to elements with `.reveal*` classes
 * when they scroll into the viewport. Uses IntersectionObserver.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
