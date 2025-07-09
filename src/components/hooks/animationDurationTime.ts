import { useRef, useEffect } from "react";
export function useAnimationDurationTime (currentIndex: number) {
      const prevRef = useRef(currentIndex);
      const cirlceRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        if (!cirlceRef) {
          return;
        }
        if (cirlceRef.current) {
          const diff = Math.abs(currentIndex - prevRef.current);
          cirlceRef.current.style.setProperty('--transitionDuration', `${diff * 200}ms`);
        }
        prevRef.current = currentIndex;
      }, [currentIndex]);
      return cirlceRef
}