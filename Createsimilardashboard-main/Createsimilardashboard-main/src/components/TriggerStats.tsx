import { Flame, Droplets, Wind, Thermometer } from 'lucide-react';
import { useEffect, useState } from 'react';

const icons = [
  { Icon: Flame, label: 'Heat', color: 'text-orange-400', bgColor: 'from-orange-500/20 to-red-500/20' },
  { Icon: Droplets, label: 'Humidity', color: 'text-blue-400', bgColor: 'from-blue-500/20 to-cyan-500/20' },
  { Icon: Wind, label: 'Airflow', color: 'text-emerald-400', bgColor: 'from-emerald-500/20 to-green-500/20' },
  { Icon: Thermometer, label: 'Temp', color: 'text-cyan-400', bgColor: 'from-cyan-500/20 to-blue-500/20' }
];

export function TriggerStats() {
  const [stats, setStats] = useState([32, 32, 32, 32]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(stats.map(() => Math.floor(Math.random() * 20) + 25));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm">Trigger Statistics</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {icons.map(({ Icon, label, color, bgColor }, index) => (
          <div key={label} className={`bg-gradient-to-br ${bgColor} border border-cyan-500/20 rounded-lg p-4 flex flex-col items-center relative overflow-hidden group hover:scale-105 transition-transform`}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            <Icon className={`w-8 h-8 ${color} mb-2 relative z-10 group-hover:scale-110 transition-transform`} />
            <div className="text-2xl text-cyan-100 mb-1 relative z-10">{stats[index]}</div>
            <div className="text-xs text-cyan-400/60 relative z-10">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}