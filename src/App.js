import React, { useState, useEffect } from 'react';
import { AreaChart, Area, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Power, Wifi, Database, Activity, Droplet, AlertTriangle, Clock, MapPin } from 'lucide-react';

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemUptime, setSystemUptime] = useState(0);
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setSystemUptime(prev => prev + 1);
      if (animatedCount < 48) setAnimatedCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [animatedCount]);

  const events = [
    { time: '15:48:49', timestamp: 948, distance: 33, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '15:49:06', timestamp: 966, distance: 33, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '15:49:49', timestamp: 1009, distance: null, uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '15:50:06', timestamp: 1026, distance: 33, uploadType: 'periodic', cover: 'OPEN' },
    { time: '15:50:49', timestamp: 1069, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'Cover close' },
    { time: '15:55:45', timestamp: 1365, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'Close→Close' },
    { time: '15:55:49', timestamp: 1369, distance: 40, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '15:56:09', timestamp: 1389, distance: 40, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '15:56:49', timestamp: 1429, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'SendPacket' },
    { time: '16:26:52', timestamp: 3232, distance: 31, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:27:15', timestamp: 3255, distance: 31, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:27:52', timestamp: 3292, distance: null, uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:28:15', timestamp: 3315, distance: null, uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:28:40', timestamp: 3340, distance: null, uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:28:45', timestamp: 3345, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: '[OPEN]→[Close]' },
    { time: '16:29:17', timestamp: 3377, distance: 28, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:29:52', timestamp: 3412, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'ui6WaterDistance' },
    { time: '16:30:17', timestamp: 3437, distance: 28, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:30:52', timestamp: 3472, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'SendPacket' },
    { time: '16:31:17', timestamp: 3497, distance: 28, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:31:52', timestamp: 3532, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'ui6WaterDistance' },
    { time: '16:32:17', timestamp: 3557, distance: 28, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:32:52', timestamp: 3592, distance: null, uploadType: 'immediate', cover: 'OPEN', event: 'SendPacket True' },
    { time: '16:33:17', timestamp: 3617, distance: 28, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:33:52', timestamp: 3652, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'SendPacket' },
    { time: '16:34:17', timestamp: 3677, distance: 28, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:34:52', timestamp: 3712, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'SendPacket' },
    { time: '16:35:18', timestamp: 3738, distance: 28, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:35:52', timestamp: 3772, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'ui6WaterDistance' },
    { time: '16:36:09', timestamp: 3789, distance: null, uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:36:12', timestamp: 3792, distance: null, uploadType: 'immediate', cover: 'OPEN', event: 'read coordinates' },
    { time: '16:37:20', timestamp: 3860, distance: 30, uploadType: 'periodic', cover: 'OPEN' },
    { time: '16:37:52', timestamp: 3892, distance: null, uploadType: 'immediate', cover: 'OPEN', event: 'ui6WaterDistance' },
    { time: '16:38:03', timestamp: 3903, distance: null, uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:38:03', timestamp: 3903, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: '[Close]→[OPEN]' },
    { time: '16:38:07', timestamp: 3907, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'fg_coverAlarm' },
    { time: '16:38:07', timestamp: 3907, distance: null, uploadType: 'immediate', cover: 'OPEN', event: 'read coordinates' },
    { time: '16:38:21', timestamp: 3921, distance: 31, uploadType: 'periodic', cover: 'OPEN' },
    { time: '16:39:22', timestamp: 3982, distance: null, uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:39:22', timestamp: 3982, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: '[Close]→[OPEN]' },
    { time: '16:39:23', timestamp: 3983, distance: 28, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:40:23', timestamp: 4043, distance: 28, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:40:25', timestamp: 4045, distance: null, uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:40:26', timestamp: 4046, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: '[OPEN]→[Close]' },
    { time: '16:40:29', timestamp: 4049, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'fg_coverAlarm' },
    { time: '16:41:24', timestamp: 4104, distance: 29, uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:41:52', timestamp: 4132, distance: null, uploadType: 'immediate', cover: 'CLOSE', event: 'ui6WaterDistance' },
    { time: '16:42:25', timestamp: 4165, distance: null, uploadType: 'immediate', cover: 'OPEN', event: 'Open→Open' },
    { time: '16:42:41', timestamp: 4181, distance: null, uploadType: 'immediate', cover: 'OPEN', event: 'read coordinates' },
  ];

  const totalEvents = events.length;
  const alarmCount = events.filter(e => e.uploadType === 'immediate').length;
  const periodicCount = events.filter(e => e.uploadType === 'periodic').length;
  const avgDistance = events.filter(e => e.distance).reduce((sum, e) => sum + e.distance, 0) / events.filter(e => e.distance).length;

  const distanceData = events.filter(e => e.distance).map(e => ({
    time: e.time.substring(0, 5),
    distance: e.distance
  }));

  const eventTypes = [
    { type: '6-axis', count: events.filter(e => e.event && e.event.includes('6-axis')).length, fullMark: 15 },
    { type: 'SendPacket', count: events.filter(e => e.event && e.event.includes('SendPacket')).length, fullMark: 15 },
    { type: 'Cover', count: events.filter(e => e.event && (e.event.includes('Open') || e.event.includes('Close'))).length, fullMark: 15 },
    { type: 'Distance', count: events.filter(e => e.event && e.event.includes('WaterDistance')).length, fullMark: 15 },
  ];

  const uploadDistribution = [
    { name: 'Periodic', value: periodicCount, color: '#10b981' },
    { name: 'Immediate', value: alarmCount, color: '#f59e0b' }
  ];

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
                  <h1 className="text-xl sm:text-2xl font-bold text-cyan-300 flex items-center gap-2">
                    H01 MANHOLE CONTROL CENTER
                    <span className="text-xs px-2 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded">v2.0</span>
                  </h1>
                  <div className="text-cyan-400/60 text-xs sm:text-sm">
                    {currentTime.toLocaleString()} • Uptime: {Math.floor(systemUptime / 60)}m {systemUptime % 60}s
                  </div>
                </div>
              </div>

              {/* Center: System Indicators */}
              <div className="flex items-center gap-3 flex-wrap">
                <SystemIndicator icon={Power} label="Power" status="online" value="98%" />
                <SystemIndicator icon={Wifi} label="Network" status="online" value="145ms" />
                <SystemIndicator icon={Database} label="Database" status="online" value="99.9%" />
              </div>

              {/* Right: Quick Stats */}
              <div className="flex gap-4">
                <QuickStat label="Total Events" value={animatedCount} trend="up" />
                <QuickStat label="Alerts" value={alarmCount} trend="down" />
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <div className="xl:col-span-3 space-y-6">
              <TriggerStats events={events} avgDistance={avgDistance} />
              <RadarDisplay eventTypes={eventTypes} />
              <MapDisplay />
            </div>

            {/* Center Content */}
            <div className="xl:col-span-6 space-y-6">
              <RealTimeData distanceData={distanceData} />
              <TriggerDetails events={events} />
            </div>

            {/* Right Sidebar */}
            <div className="xl:col-span-3 space-y-6">
              <SystemStatus totalEvents={totalEvents} alarmCount={alarmCount} periodicCount={periodicCount} />
              <UploadDistribution data={uploadDistribution} />
              <RealTimeAlerts events={events} />
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

function SystemIndicator({ icon: Icon, label, status, value }) {
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

function QuickStat({ label, value, trend }) {
  return (
    <div className="px-4 py-2 bg-slate-800/60 border border-cyan-500/20 rounded-lg">
      <div className="text-xs text-cyan-400/60 mb-1">{label}</div>
      <div className="flex items-center gap-2">
        <span className="text-xl text-cyan-300 font-bold">{value}</span>
        <span className={`text-xs ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
          {trend === 'up' ? '↑' : '↓'}
        </span>
      </div>
    </div>
  );
}

function TriggerStats({ events, avgDistance }) {
  const stats = [
    { icon: Activity, label: 'Total Events', value: events.length, color: 'text-orange-400', bgColor: 'from-orange-500/20 to-red-500/20' },
    { icon: Droplet, label: 'Avg Distance', value: `${avgDistance.toFixed(1)}cm`, color: 'text-blue-400', bgColor: 'from-blue-500/20 to-cyan-500/20' },
    { icon: AlertTriangle, label: 'Alarms', value: events.filter(e => e.uploadType === 'immediate').length, color: 'text-emerald-400', bgColor: 'from-emerald-500/20 to-green-500/20' },
    { icon: Clock, label: 'Periodic', value: events.filter(e => e.uploadType === 'periodic').length, color: 'text-cyan-400', bgColor: 'from-cyan-500/20 to-blue-500/20' }
  ];

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm font-semibold">Sensor Statistics</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map(({ icon: Icon, label, value, color, bgColor }) => (
          <div key={label} className={`bg-gradient-to-br ${bgColor} border border-cyan-500/20 rounded-lg p-4 flex flex-col items-center relative overflow-hidden group hover:scale-105 transition-transform`}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            <Icon className={`w-8 h-8 ${color} mb-2 relative z-10 group-hover:scale-110 transition-transform`} />
            <div className="text-2xl text-cyan-100 mb-1 relative z-10 font-bold">{value}</div>
            <div className="text-xs text-cyan-400/60 relative z-10">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RadarDisplay({ eventTypes }) {
  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm font-semibold">Event Type Analysis</h3>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart data={eventTypes}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="type" stroke="#94a3b8" tick={{ fontSize: 10, fill: '#94a3b8' }} />
          <PolarRadiusAxis stroke="#94a3b8" />
          <Radar name="Count" dataKey="count" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function MapDisplay() {
  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm font-semibold">Location Map</h3>
      </div>
      <div className="bg-slate-950/60 rounded-lg p-8 flex items-center justify-center border border-cyan-500/20 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative z-10 text-center">
          <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-2 animate-pulse" />
          <div className="text-cyan-300 text-sm font-semibold">H01 Manhole</div>
          <div className="text-cyan-400/60 text-xs">3.1416, 101.6869</div>
        </div>
      </div>
    </div>
  );
}

function RealTimeData({ distanceData }) {
  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm font-semibold">Real Time Water Level Data</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={distanceData} margin={{ top: 10, right: 30, left: 0, bottom: 40 }}>
          <defs>
            <linearGradient id="distGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
          <XAxis dataKey="time" stroke="#94a3b8" tick={{ fontSize: 10, angle: -45, textAnchor: 'end', fill: '#94a3b8' }} height={80} />
          <YAxis domain={[25, 45]} stroke="#94a3b8" tick={{ fontSize: 11, fill: '#94a3b8' }} />
          <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #06b6d4', borderRadius: '8px' }} />
          <Area type="monotone" dataKey="distance" stroke="#06b6d4" strokeWidth={3} fill="url(#distGrad)" name="Distance (cm)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function TriggerDetails({ events }) {
  const recentEvents = events.slice(-6).reverse();

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm font-semibold">Recent Events</h3>
      </div>
      <div className="space-y-2">
        {recentEvents.map((event, idx) => (
          <div key={idx} className={`bg-slate-950/60 border rounded-lg p-3 relative overflow-hidden group hover:scale-[1.02] transition-all ${event.uploadType === 'immediate' ? 'border-orange-500/40' : 'border-cyan-500/20'
            }`}>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${event.uploadType === 'immediate' ? 'bg-gradient-to-br from-orange-500/10 to-transparent' : 'bg-gradient-to-br from-cyan-500/10 to-transparent'
              }`}></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-2">
                <span className="text-cyan-100 text-sm font-mono">{event.time}</span>
                <span className={`px-2 py-1 rounded text-xs font-bold ${event.cover === 'OPEN' ? 'bg-pink-600 text-white' : 'bg-indigo-600 text-white'}`}>
                  {event.cover}
                </span>
              </div>
              {event.distance && (
                <div className="text-cyan-400 text-sm mb-1">📏 Distance: {event.distance}cm</div>
              )}
              {event.event && (
                <div className="text-gray-300 text-xs">⚡ {event.event}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemStatus({ totalEvents, alarmCount, periodicCount }) {
  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm font-semibold">System Status</h3>
      </div>
      <div className="space-y-3">
        <StatusItem label="Total Events" value={totalEvents} status="normal" />
        <StatusItem label="Alarm Triggers" value={alarmCount} status="warning" />
        <StatusItem label="Periodic Updates" value={periodicCount} status="normal" />
        <StatusItem label="System Health" value="98%" status="normal" />
      </div>
    </div>
  );
}

function StatusItem({ label, value, status }) {
  return (
    <div className="flex justify-between items-center p-2 bg-slate-950/40 rounded border border-cyan-500/10">
      <span className="text-cyan-400/60 text-xs">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-cyan-300 text-sm font-bold">{value}</span>
        <div className={`w-2 h-2 rounded-full ${status === 'warning' ? 'bg-orange-400' : 'bg-emerald-400'} animate-pulse`}></div>
      </div>
    </div>
  );
}

function UploadDistribution({ data }) {
  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm font-semibold">Upload Distribution</h3>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={60} dataKey="value">
            {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

function RealTimeAlerts({ events }) {
  const alerts = events.filter(e => e.uploadType === 'immediate').slice(-4).reverse();

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm font-semibold">Real Time Alerts</h3>
      </div>
      <div className="space-y-2">
        {alerts.map((alert, idx) => (
          <div key={idx} className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-2">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-xs font-semibold">{alert.event || 'Alarm Triggered'}</span>
            </div>
            <div className="text-orange-400/60 text-xs font-mono">{alert.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}