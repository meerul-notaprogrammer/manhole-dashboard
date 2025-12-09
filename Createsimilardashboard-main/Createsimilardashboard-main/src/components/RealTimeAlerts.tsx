import { useState, useEffect } from 'react';
import { AlertCircle, Thermometer, TrendingUp } from 'lucide-react';
import { User } from 'lucide-react';

interface Alert {
  id: string;
  type: string;
  location: string;
  temperature: string;
  status: 'critical' | 'warning';
  icon: 'temp' | 'alert';
}

const initialAlerts: Alert[] = [
  { id: '1', type: 'Hospital temperature...', location: 'PNZSN245M6LP', temperature: '23°C', status: 'warning', icon: 'temp' },
  { id: '2', type: 'Hospital temperature...', location: 'PNZSN245M6LP', temperature: '26°C', status: 'critical', icon: 'alert' },
  { id: '3', type: 'Hospital temperature...', location: 'PNZSN245M6LP', temperature: '22°C', status: 'critical', icon: 'alert' },
  { id: '4', type: 'Hospital temperature...', location: 'PNZSN245M6LP', temperature: '24°C', status: 'critical', icon: 'alert' },
  { id: '5', type: 'Hospital temperature...', location: 'PNZSN245M6LP', temperature: '25°C', status: 'critical', icon: 'alert' },
];

export function RealTimeAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts(prevAlerts => {
        const newAlerts = [...prevAlerts];
        const randomIndex = Math.floor(Math.random() * newAlerts.length);
        newAlerts[randomIndex] = {
          ...newAlerts[randomIndex],
          temperature: `${Math.floor(Math.random() * 8) + 20}°C`,
          status: Math.random() > 0.5 ? 'critical' : 'warning'
        };
        return newAlerts;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm">Real Time Alerts</h3>
      </div>
      
      <div className="space-y-2">
        {alerts.map((alert) => (
          <div 
            key={alert.id}
            className={`rounded-lg p-3 border relative overflow-hidden group ${
              alert.status === 'critical' 
                ? 'bg-red-950/40 border-red-500/40 shadow-lg shadow-red-500/10' 
                : 'bg-yellow-950/40 border-yellow-500/40 shadow-lg shadow-yellow-500/10'
            }`}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
              alert.status === 'critical' ? 'bg-gradient-to-br from-red-500/20 to-transparent' : 'bg-gradient-to-br from-yellow-500/20 to-transparent'
            }`}></div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                alert.status === 'critical' ? 'bg-red-500/30 shadow-lg shadow-red-500/30' : 'bg-yellow-500/30 shadow-lg shadow-yellow-500/30'
              }`}>
                <User className={`w-4 h-4 ${alert.status === 'critical' ? 'text-red-400' : 'text-yellow-400'}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="text-cyan-100 text-xs mb-1">{alert.type}</div>
                <div className="text-xs text-cyan-400/60">{alert.location}</div>
              </div>
              
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex items-center gap-1">
                  <Thermometer className={`w-3 h-3 ${alert.status === 'critical' ? 'text-red-400' : 'text-yellow-400'}`} />
                  <span className={`text-xs ${alert.status === 'critical' ? 'text-red-400' : 'text-yellow-400'}`}>
                    {alert.temperature}
                  </span>
                </div>
                <div className={`px-2 py-1 rounded text-xs ${
                  alert.status === 'critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {alert.status === 'critical' ? 'CRITICAL' : 'WARNING'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}