import { useState, useEffect } from 'react';

export function RadarDisplay() {
  const [angle, setAngle] = useState(0);
  const [targets, setTargets] = useState([
    { x: 60, y: 40, id: 1 },
    { x: 30, y: 70, id: 2 },
    { x: 80, y: 60, id: 3 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTargets(prev => prev.map(t => ({
        ...t,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm">Facility Radar</h3>
      </div>
      
      <div className="relative w-full aspect-square bg-slate-950/60 rounded-lg border border-cyan-500/20 overflow-hidden">
        {/* Radar Circles */}
        <svg className="absolute inset-0 w-full h-full">
          <circle cx="50%" cy="50%" r="45%" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />
          <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />
          <circle cx="50%" cy="50%" r="15%" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />
          
          {/* Rotating Sweep */}
          <line 
            x1="50%" 
            y1="50%" 
            x2={`${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`}
            y2={`${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`}
            stroke="rgba(6,182,212,0.6)" 
            strokeWidth="2"
          />
          
          {/* Targets */}
          {targets.map((target) => (
            <g key={target.id}>
              <circle 
                cx={`${target.x}%`} 
                cy={`${target.y}%`} 
                r="3" 
                fill="#06b6d4"
                className="animate-pulse"
              />
              <circle 
                cx={`${target.x}%`} 
                cy={`${target.y}%`} 
                r="6" 
                fill="none"
                stroke="#06b6d4"
                strokeWidth="1"
                opacity="0.5"
              />
            </g>
          ))}
        </svg>
        
        {/* Sweep Gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `conic-gradient(from ${angle}deg at 50% 50%, transparent 0deg, rgba(6,182,212,0.3) 30deg, transparent 60deg)`,
          }}
        ></div>
      </div>
      
      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="text-cyan-400/60">Range: 500m</span>
        <span className="text-emerald-400">{targets.length} Signals</span>
      </div>
    </div>
  );
}
