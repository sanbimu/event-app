import { useEffect, useRef, LegacyRef } from 'react';

export function useHorizontalScroll<T extends HTMLElement>(): LegacyRef<T> {
  const scrollRef = useRef<T>(null);

  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let scrolling = false;

    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      scrolling = false;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const element = scrollRef.current;
      if (!element || scrolling) return;

      const currentX = event.touches[0].clientX;
      const currentY = event.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;
      const threshold = 5;

      // Determine if scrolling should be horizontal or vertical
      if (Math.abs(diffX) > threshold && Math.abs(diffX) > Math.abs(diffY)) {
        event.preventDefault();
        element.scrollLeft += diffX;
        scrolling = true;
      } else if (Math.abs(diffY) > threshold && Math.abs(diffY) > Math.abs(diffX)) {
        scrolling = true;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += event.deltaY;
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener('touchstart', handleTouchStart);
      scrollRef.current.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
      scrollRef.current.addEventListener('wheel', handleWheel);

      return () => {
        if (scrollRef.current) {
          scrollRef.current.removeEventListener('touchstart', handleTouchStart);
          scrollRef.current.removeEventListener('touchmove', handleTouchMove);
          scrollRef.current.removeEventListener('wheel', handleWheel);
        }
      };
    }
  }, []);

  return scrollRef;
}
