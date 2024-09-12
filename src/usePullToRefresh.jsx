import { useEffect, useRef, useState } from 'react';

const usePullToRefresh = (onRefresh) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startY = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e) => {
      startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      currentY.current = e.touches[0].clientY;
      if (currentY.current - startY.current > 50) {
        setIsRefreshing(true);
      }
    };

    const handleTouchEnd = () => {
      if (isRefreshing) {
        onRefresh();
        setIsRefreshing(false);
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isRefreshing, onRefresh]);

  return isRefreshing;
};

export default usePullToRefresh;
