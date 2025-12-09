import { useState, useEffect } from 'react';
import { TriggerStats } from './components/TriggerStats';
import { RealTimeData } from './components/RealTimeData';
import { DeviceModel } from './components/DeviceModel';
import { RealTimeAlerts } from './components/RealTimeAlerts';
import { TriggerDetails } from './components/TriggerDetails';
import { MapDisplay } from './components/MapDisplay';
import { SystemStatus } from './components/SystemStatus';
import { RadarDisplay } from './components/RadarDisplay';
import { ActivityMonitor } from './components/ActivityMonitor';
import { Power, Wifi, Database, Shield } from 'lucide-react';

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemUptime, setSystemUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setSystemUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-32 animate-scan pointer-events-none"></div>

      <div className="relative z-10 p-4 md:p-6">
        <div className="max-w-[2000px] mx-auto">
          {/* Top Header Bar */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 mb-6 shadow-lg shadow-cyan-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left: Title */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-cyan-300 flex items-center gap-2">
                    MEDICAL CONTROL CENTER
                    <span className="text-xs px-2 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded">v2.4.1</span>
                  </h1>
                  <div className="text-cyan-400/60 text-sm">
                    {currentTime.toLocaleString()} • Uptime: {Math.floor(systemUptime / 60)}m {systemUptime % 60}s
                  </div>
                </div>
              </div>

              {/* Center: System Indicators */}
              <div className="flex items-center gap-3">
                <SystemIndicator icon={Power} label="Power" status="online" value="98%" />
                <SystemIndicator icon={Wifi} label="Network" status="online" value="145ms" />
                <SystemIndicator icon={Database} label="Database" status="online" value="99.9%" />
              </div>

              {/* Right: Quick Stats */}
              <div className="flex gap-4">
                <QuickStat label="Active Rooms" value="24" trend="up" />
                <QuickStat label="Alerts" value="3" trend="down" />
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <div className="xl:col-span-3 space-y-6">
              <TriggerStats />
              <RadarDisplay />
              <MapDisplay />
            </div>

            {/* Center Content */}
            <div className="xl:col-span-6 space-y-6">
              <RealTimeData />
              <TriggerDetails />
            </div>

            {/* Right Sidebar */}
            <div className="xl:col-span-3 space-y-6">
              <SystemStatus />
              <DeviceModel />
              <ActivityMonitor />
              <RealTimeAlerts />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </div>
  );
}

function SystemIndicator({ icon: Icon, label, status, value }: { icon: any, label: string, status: string, value: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/60 border border-cyan-500/20 rounded-lg">
      <div className="relative">
        <Icon className="w-4 h-4 text-cyan-400" />
        <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${status === 'online' ? 'bg-emerald-400' : 'bg-red-400'} animate-pulse`}></div>
      </div>
      <div>
        <div className="text-xs text-cyan-400/60">{label}</div>
        <div className="text-xs text-cyan-300">{value}</div>
      </div>
    </div>
  );
}

function QuickStat({ label, value, trend }: { label: string, value: string, trend: 'up' | 'down' }) {
  return (
    <div className="px-4 py-2 bg-slate-800/60 border border-cyan-500/20 rounded-lg">
      <div className="text-xs text-cyan-400/60 mb-1">{label}</div>
      <div className="flex items-center gap-2">
        <span className="text-xl text-cyan-300">{value}</span>
        <span className={`text-xs ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
          {trend === 'up' ? '↑' : '↓'}
        </span>
      </div>
    </div>
  );
}
