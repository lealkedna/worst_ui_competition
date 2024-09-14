"use client";

import { useEffect, useState } from 'react';

const InvertedCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      
      const invertedX = window.innerWidth - event.clientX;
      const invertedY = window.innerHeight - event.clientY;
      setCursorPosition({ x: invertedX, y: invertedY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>

      <div
        style={{
          position: 'fixed', 
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          width: '20px',
          height: '20px',
          backgroundColor: 'orange',
          borderRadius: '50%',
          pointerEvents: 'none', 
        }}
      />
    </>
  );
};

export default InvertedCursor;
