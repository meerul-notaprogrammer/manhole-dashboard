import { useState, useEffect } from 'react';

export function ActivityMonitor() {
  const [dataPoints, setDataPoints] = useState<number[]>(Array(50).fill(0).map(() => Math.random() * 100));

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => [...prev.slice(1), Math.random() * 100]);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const max = Math.max(...dataPoints);
  
  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <h3 className="text-cyan-300 text-sm">Activity Monitor</h3>
        </div>
        <div className="text-xs text-emerald-400">LIVE</div>
      </div>
      
      <div className="h-24 bg-slate-950/60 rounded-lg border border-cyan-500/20 p-2 overflow-hidden relative">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-px bg-cyan-500/10"></div>
          ))}
        </div>
        
        {/* Waveform */}
        <svg className="w-full h-full">
          <polyline
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            points={dataPoints
              .map((value, index) => {
                const x = (index / (dataPoints.length - 1)) * 100;
                const y = 100 - (value / max) * 100;
                return `${x}%,${y}%`;
              })
              .join(' ')}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
        <div>
          <div className="text-cyan-400/60">Peak</div>
          <div className="text-cyan-300">{Math.round(max)}</div>
        </div>
        <div>
          <div className="text-cyan-400/60">Avg</div>
          <div className="text-cyan-300">{Math.round(dataPoints.reduce((a, b) => a + b, 0) / dataPoints.length)}</div>
        </div>
        <div>
          <div className="text-cyan-400/60">Current</div>
          <div className="text-emerald-400">{Math.round(dataPoints[dataPoints.length - 1])}</div>
        </div>
      </div>
    </div>
  );
}
