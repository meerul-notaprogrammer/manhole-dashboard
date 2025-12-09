import { useState, useEffect } from 'react';

export function DeviceModel() {
  const [data, setData] = useState([
    { name: 'MON', value: 45 },
    { name: 'TUE', value: 52 },
    { name: 'WED', value: 61 },
    { name: 'THU', value: 48 },
    { name: 'FRI', value: 55 },
    { name: 'SAT', value: 42 },
    { name: 'SUN', value: 38 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => 
        prevData.map(item => ({
          ...item,
          value: Math.floor(Math.random() * 40) + 30
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm">Device Activity</h3>
      </div>
      
      <div className="h-40 flex items-end justify-between gap-2 px-2 pb-8 pt-4 bg-slate-950/60 rounded-lg border border-cyan-500/20">
        {data.map((item, index) => (
          <div key={item.name} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full rounded-t relative overflow-hidden group" 
                 style={{ height: '100%' }}>
              <div 
                className="absolute bottom-0 w-full bg-gradient-to-t from-cyan-500 via-cyan-400 to-cyan-300 rounded-t transition-all duration-1000 hover:from-cyan-400 hover:via-cyan-300 hover:to-cyan-200"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"></div>
              </div>
            </div>
            <div className="text-xs text-cyan-400/80">{item.name}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-3 flex justify-between text-xs">
        <span className="text-cyan-400/60">Weekly Overview</span>
        <span className="text-cyan-300">Peak: {maxValue}</span>
      </div>
    </div>
  );
}