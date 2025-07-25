import React, { useEffect, useRef, useState } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [isMoving, setIsMoving] = useState(false);
  const sparkIdRef = useRef(0);
  const lastSparkTime = useRef(0);
  const animationRef = useRef<number>();

  // Track mouse movement
  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimeout);
    };
  }, []);

  // Smooth cursor following with jelly effect
  useEffect(() => {
    const updateCursor = () => {
      setCursorPos(prev => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        
        // Smooth following with easing
        const ease = 0.15;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease
        };
      });

      // Create sparks when moving
      const now = Date.now();
      if (isMoving && now - lastSparkTime.current > 50) {
        createSpark();
        lastSparkTime.current = now;
      }

      // Update sparks
      setSparks(prevSparks => 
        prevSparks
          .map(spark => ({
            ...spark,
            x: spark.x + spark.vx,
            y: spark.y + spark.vy,
            life: spark.life - 1,
            vy: spark.vy + 0.1, // gravity
            vx: spark.vx * 0.98 // air resistance
          }))
          .filter(spark => spark.life > 0)
      );

      animationRef.current = requestAnimationFrame(updateCursor);
    };

    animationRef.current = requestAnimationFrame(updateCursor);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, isMoving]);

  const createSpark = () => {
    const newSparks: Spark[] = [];
    const sparkCount = Math.random() * 3 + 2;

    for (let i = 0; i < sparkCount; i++) {
      newSparks.push({
        id: sparkIdRef.current++,
        x: cursorPos.x + (Math.random() - 0.5) * 20,
        y: cursorPos.y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4 - 2,
        life: Math.random() * 30 + 20,
        maxLife: Math.random() * 30 + 20,
        size: Math.random() * 4 + 2
      });
    }

    setSparks(prev => [...prev, ...newSparks]);
  };

  return (
    <>
      {/* Cursor Follower */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          left: cursorPos.x - 20,
          top: cursorPos.y - 20,
          transform: `scale(${isMoving ? 1.2 : 1})`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        {/* Main Jelly Blob */}
        <div className="relative w-10 h-10">
          <svg
            viewBox="0 0 40 40"
            className="w-full h-full animate-jelly"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(255, 107, 53, 0.8))'
            }}
          >
            <defs>
              <radialGradient id="cursor-gradient" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ff8c42" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff4500" stopOpacity="0.7" />
              </radialGradient>
            </defs>
            <path
              fill="url(#cursor-gradient)"
              d="M20,5 C30,5 35,10 35,20 C35,30 30,35 20,35 C10,35 5,30 5,20 C5,10 10,5 20,5 Z"
              className="jelly-morph"
            />
          </svg>
          
          {/* Inner glow */}
          <div 
            className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-300/40 to-orange-500/40 blur-sm animate-pulse"
          />
        </div>
      </div>

      {/* Fire Sparks */}
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: spark.x,
            top: spark.y,
            width: spark.size,
            height: spark.size,
            opacity: spark.life / spark.maxLife,
            transform: `scale(${spark.life / spark.maxLife})`
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, 
                ${spark.life > spark.maxLife * 0.7 ? '#ffd700' : 
                  spark.life > spark.maxLife * 0.4 ? '#ff8c42' : '#ff4500'} 0%, 
                transparent 70%
              )`,
              boxShadow: `0 0 ${spark.size * 2}px ${
                spark.life > spark.maxLife * 0.7 ? '#ffd700' : 
                spark.life > spark.maxLife * 0.4 ? '#ff8c42' : '#ff4500'
              }`
            }}
          />
        </div>
      ))}

      <style>{`
        @keyframes jelly {
          0%, 100% { 
            transform: scale(1) skew(0deg, 0deg); 
          }
          25% { 
            transform: scale(1.1, 0.9) skew(2deg, 1deg); 
          }
          50% { 
            transform: scale(0.9, 1.1) skew(-1deg, -2deg); 
          }
          75% { 
            transform: scale(1.05, 0.95) skew(1deg, 2deg); 
          }
        }
        
        .animate-jelly {
          animation: jelly 2s ease-in-out infinite;
        }
        
        .jelly-morph {
          animation: morph 3s ease-in-out infinite;
        }
        
        @keyframes morph {
          0%, 100% {
            d: path("M20,5 C30,5 35,10 35,20 C35,30 30,35 20,35 C10,35 5,30 5,20 C5,10 10,5 20,5 Z");
          }
          25% {
            d: path("M20,3 C32,7 37,12 35,20 C33,32 28,37 20,35 C8,33 3,28 5,20 C7,8 12,3 20,3 Z");
          }
          50% {
            d: path("M20,7 C28,3 37,8 37,20 C37,28 32,37 20,37 C12,37 3,32 3,20 C3,12 8,3 20,7 Z");
          }
          75% {
            d: path("M20,5 C28,9 33,14 35,20 C37,26 32,31 20,35 C12,31 7,26 5,20 C3,14 8,9 20,5 Z");
          }
        }
        
        /* Hide default cursor */
        * {
          cursor: none !important;
        }
        
        /* Show cursor on interactive elements */
        a, button, input, textarea, select {
          cursor: pointer !important;
        }
      `}</style>
    </>
  );
};

export default CursorFollower;