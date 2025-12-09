import { useState, useEffect } from 'react';
import { Cpu, HardDrive, Activity } from 'lucide-react';

export function SystemStatus() {
  const [cpu, setCpu] = useState(45);
  const [memory, setMemory] = useState(62);
  const [network, setNetwork] = useState(78);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 30) + 30);
      setMemory(Math.floor(Math.random() * 25) + 50);
      setNetwork(Math.floor(Math.random() * 20) + 70);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm">System Status</h3>
      </div>
      
      <div className="space-y-4">
        <StatusBar icon={Cpu} label="CPU Usage" value={cpu} color="cyan" />
        <StatusBar icon={HardDrive} label="Memory" value={memory} color="emerald" />
        <StatusBar icon={Activity} label="Network" value={network} color="blue" />
      </div>
    </div>
  );
}

function StatusBar({ icon: Icon, label, value, color }: { icon: any, label: string, value: number, color: string }) {
  const colorClasses = {
    cyan: 'from-cyan-500 to-cyan-600',
    emerald: 'from-emerald-500 to-emerald-600',
    blue: 'from-blue-500 to-blue-600'
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-cyan-400" />
          <span className="text-xs text-cyan-300">{label}</span>
        </div>
        <span className="text-sm text-cyan-100">{value}%</span>
      </div>
      <div className="h-2 bg-slate-800/60 rounded-full overflow-hidden border border-cyan-500/10">
        <div 
          className={`h-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} transition-all duration-1000 relative`}
          style={{ width: `${value}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
