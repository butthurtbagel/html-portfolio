
import React, { useEffect, useState, useCallback } from 'react';

const FloatingHearts: React.FC<{ active: boolean }> = ({ active }) => {
  const [hearts, setHearts] = useState<{ id: number; x: number; size: number }[]>([]);

  const spawnHeart = useCallback(() => {
    const id = Date.now();
    const x = Math.random() * 100;
    const size = Math.random() * (40 - 20) + 20;
    setHearts(prev => [...prev, { id, x, size }]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== id));
    }, 4000);
  }, []);

  useEffect(() => {
    if (active) {
      const interval = setInterval(spawnHeart, 300);
      return () => clearInterval(interval);
    }
  }, [active, spawnHeart]);

  return (
    <>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart-float text-red-500"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            bottom: '-50px'
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
};

export default FloatingHearts;
