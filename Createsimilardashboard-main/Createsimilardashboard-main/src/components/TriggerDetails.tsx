import { useState, useEffect } from 'react';
import { Check, TrendingUp, TrendingDown } from 'lucide-react';

interface TriggerRow {
  id: string;
  value: string;
  parameter: string;
  mode: string;
  event: string;
  network: string;
  nodeAddr: string;
  heat: string;
  status: 'online' | 'offline';
  trend: 'up' | 'down';
  percentage: string;
}

const initialData: TriggerRow[] = [
  { id: '1', value: 'Hospital tempre...', parameter: 'PN234GJWB1LP', mode: '653.4', event: 'Online', network: 'Online', nodeAddr: '5°C', heat: '10%', status: 'online', trend: 'up', percentage: '10%' },
  { id: '2', value: 'Hospital tempre...', parameter: 'PN234GJWB1LP', mode: '653.4', event: 'Online', network: 'Online', nodeAddr: '5°C', heat: '10%', status: 'online', trend: 'up', percentage: '10%' },
  { id: '3', value: 'Hospital tempre...', parameter: 'PN234GJWB1LP', mode: '653.4', event: 'Online', network: 'Online', nodeAddr: '5°C', heat: '10%', status: 'online', trend: 'up', percentage: '10%' },
  { id: '4', value: 'Hospital tempre...', parameter: 'PN234GJWB1LP', mode: '653.4', event: 'Reserved', network: 'Reserved', nodeAddr: '5°C', heat: '10%', status: 'offline', trend: 'down', percentage: '10%' },
];

export function TriggerDetails() {
  const [data, setData] = useState<TriggerRow[]>(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => 
        prevData.map(row => ({
          ...row,
          mode: (Math.random() * 1000).toFixed(1),
          nodeAddr: `${(Math.random() * 10).toFixed(0)}°C`,
          percentage: `${(Math.random() * 20).toFixed(0)}%`,
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm">Trigger Details</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-cyan-500/30 bg-slate-950/60">
              <th className="text-left py-3 px-3 text-cyan-400/80">Value</th>
              <th className="text-left py-3 px-3 text-cyan-400/80">Parameter</th>
              <th className="text-left py-3 px-3 text-cyan-400/80">Mode</th>
              <th className="text-left py-3 px-3 text-cyan-400/80">Event</th>
              <th className="text-left py-3 px-3 text-cyan-400/80">Network</th>
              <th className="text-left py-3 px-3 text-cyan-400/80">NodeAddr</th>
              <th className="text-left py-3 px-3 text-cyan-400/80">Heat</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors group">
                <td className="py-3 px-3 text-cyan-100">{row.value}</td>
                <td className="py-3 px-3 text-cyan-100">{row.parameter}</td>
                <td className="py-3 px-3 text-cyan-100">{row.mode}</td>
                <td className="py-3 px-3">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded border ${
                    row.status === 'online' 
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                      : 'bg-slate-500/20 text-slate-400 border-slate-500/30'
                  }`}>
                    {row.status === 'online' && <Check className="w-3 h-3" />}
                    {row.event}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded border ${
                    row.status === 'online' 
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                      : 'bg-slate-500/20 text-slate-400 border-slate-500/30'
                  }`}>
                    {row.network}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span className="inline-flex items-center gap-1 text-cyan-100">
                    {row.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-400" />
                    )}
                    {row.nodeAddr}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span className={`inline-flex items-center gap-1 ${
                    row.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {row.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {row.percentage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}