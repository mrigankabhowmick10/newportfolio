import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `target` when the element scrolls into view.
 * Supports decimal targets (e.g. 9.28).
 */
export function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const isDecimal = target % 1 !== 0;
          const decimals = isDecimal ? (target.toString().split('.')[1]?.length ?? 1) : 0;

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            setCount(isDecimal ? parseFloat(value.toFixed(decimals)) : Math.floor(value));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}
