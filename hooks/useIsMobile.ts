"use client";

import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check initial
    checkMobile();

    // Listen to resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return { isMobile, isClient };
}
