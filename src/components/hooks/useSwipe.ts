
import { useEffect } from 'react';

interface SwipeOptions {
  onNext: () => void;
  onPrev: () => void;
  threshold?: number;
}

export function useSwipe(
  ref: React.RefObject<HTMLDivElement | null>,
  { onNext, onPrev, threshold = 20 }: SwipeOptions
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startX: number | null = null;

    const handleStart = (e: TouchEvent | MouseEvent) => {
      startX =
        'touches' in e
          ? e.touches[0].clientX
          : (e as MouseEvent).clientX;
    };

    const handleEnd = (e: TouchEvent | MouseEvent) => {
      if (startX === null) return;
      const endX =
        'changedTouches' in e
          ? e.changedTouches[0].clientX
          : (e as MouseEvent).clientX;
      const diff = endX - startX;
      if (diff > threshold) onPrev();
      else if (diff < -threshold) onNext();
      startX = null;
    };

    el.addEventListener('mousedown', handleStart);
    el.addEventListener('touchstart', handleStart, { passive: true });
    el.addEventListener('mouseup', handleEnd);
    el.addEventListener('touchend', handleEnd);

    return () => {
      el.removeEventListener('mousedown', handleStart);
      el.removeEventListener('touchstart', handleStart);
      el.removeEventListener('mouseup', handleEnd);
      el.removeEventListener('touchend', handleEnd);
    };
  }, [ref, onNext, onPrev, threshold]);
}
