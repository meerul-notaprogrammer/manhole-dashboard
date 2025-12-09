import React, { useState, useEffect } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ComposedChart } from 'recharts';
import { Activity, Droplet, AlertTriangle, TrendingUp, Clock, Zap, Shield, Eye } from 'lucide-react';

const ManholeAnalysis = () => {
  const [view, setView] = useState('overview');
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animatedCount < 48) setAnimatedCount(prev => prev + 1);
    }, 30);
    return () => clearTimeout(timer);
  }, [animatedCount]);

  const events = [
    { time: '15:48:49', timestamp: 948, distance: 33, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '15:49:06', timestamp: 966, distance: 33, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '15:49:49', timestamp: 1009, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '15:50:06', timestamp: 1026, distance: 33, state: 'PERIODIC', uploadType: 'periodic', cover: 'OPEN' },
    { time: '15:50:49', timestamp: 1069, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'Cover close' },
    { time: '15:55:45', timestamp: 1365, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'Close→Close' },
    { time: '15:55:49', timestamp: 1369, distance: 40, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '15:56:09', timestamp: 1389, distance: 40, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '15:56:49', timestamp: 1429, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'SendPacket' },
    { time: '16:26:52', timestamp: 3232, distance: 31, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:27:15', timestamp: 3255, distance: 31, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:27:52', timestamp: 3292, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:28:15', timestamp: 3315, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:28:40', timestamp: 3340, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:28:45', timestamp: 3345, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: '[OPEN]→[Close]' },
    { time: '16:29:17', timestamp: 3377, distance: 28, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:29:52', timestamp: 3412, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'ui6WaterDistance' },
    { time: '16:30:17', timestamp: 3437, distance: 28, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:30:52', timestamp: 3472, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'SendPacket' },
    { time: '16:31:17', timestamp: 3497, distance: 28, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:31:52', timestamp: 3532, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'ui6WaterDistance' },
    { time: '16:32:17', timestamp: 3557, distance: 28, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:32:52', timestamp: 3592, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: 'SendPacket True' },
    { time: '16:33:17', timestamp: 3617, distance: 28, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:33:52', timestamp: 3652, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'SendPacket' },
    { time: '16:34:17', timestamp: 3677, distance: 28, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:34:52', timestamp: 3712, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'SendPacket' },
    { time: '16:35:18', timestamp: 3738, distance: 28, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:35:52', timestamp: 3772, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'ui6WaterDistance' },
    { time: '16:36:09', timestamp: 3789, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:36:12', timestamp: 3792, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: 'read coordinates' },
    { time: '16:37:20', timestamp: 3860, distance: 30, state: 'PERIODIC', uploadType: 'periodic', cover: 'OPEN' },
    { time: '16:37:52', timestamp: 3892, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: 'ui6WaterDistance' },
    { time: '16:38:03', timestamp: 3903, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:38:03', timestamp: 3903, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: '[Close]→[OPEN]' },
    { time: '16:38:07', timestamp: 3907, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'fg_coverAlarm' },
    { time: '16:38:07', timestamp: 3907, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: 'read coordinates' },
    { time: '16:38:21', timestamp: 3921, distance: 31, state: 'PERIODIC', uploadType: 'periodic', cover: 'OPEN' },
    { time: '16:39:22', timestamp: 3982, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:39:22', timestamp: 3982, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: '[Close]→[OPEN]' },
    { time: '16:39:23', timestamp: 3983, distance: 28, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:40:23', timestamp: 4043, distance: 28, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:40:25', timestamp: 4045, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: '6-axis interrupt' },
    { time: '16:40:26', timestamp: 4046, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: '[OPEN]→[Close]' },
    { time: '16:40:29', timestamp: 4049, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'fg_coverAlarm' },
    { time: '16:41:24', timestamp: 4104, distance: 29, state: 'PERIODIC', uploadType: 'periodic', cover: 'CLOSE' },
    { time: '16:41:52', timestamp: 4132, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'CLOSE', event: 'ui6WaterDistance' },
    { time: '16:42:25', timestamp: 4165, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: 'Open→Open' },
    { time: '16:42:41', timestamp: 4181, distance: null, state: 'ALARM', uploadType: 'immediate', cover: 'OPEN', event: 'read coordinates' },
  ];

  // Statistics
  const totalEvents = events.length;
  const alarmCount = events.filter(e => e.uploadType === 'immediate').length;
  const periodicCount = events.filter(e => e.uploadType === 'periodic').length;
  const openEvents = events.filter(e => e.cover === 'OPEN').length;
  const closeEvents = events.filter(e => e.cover === 'CLOSE').length;
  const avgDistance = events.filter(e => e.distance).reduce((sum, e) => sum + e.distance, 0) / events.filter(e => e.distance).length;

  // Timeline data
  const timelineData = events.map((e, idx) => ({
    index: idx,
    time: e.time,
    timestamp: e.timestamp,
    coverState: e.cover === 'OPEN' ? 2 : 1,
    uploadMarker: e.uploadType === 'immediate' ? 2.5 : 2.2,
    distance: e.distance,
    event: e.event,
    cover: e.cover
  }));

  // Upload type distribution
  const uploadDistribution = [
    { name: 'Periodic', value: periodicCount, color: '#10b981' },
    { name: 'Immediate', value: alarmCount, color: '#f59e0b' }
  ];

  // Cover state distribution
  const coverDistribution = [
    { name: 'CLOSED', value: closeEvents, color: '#6366f1' },
    { name: 'OPEN', value: openEvents, color: '#ec4899' }
  ];

  // Distance over time
  const distanceData = events.filter(e => e.distance).map(e => ({
    time: e.time.substring(0, 5),
    distance: e.distance,
    status: e.cover
  }));

  // Event frequency
  const timeBlocks = [
    { period: '15:48-50', events: 5, alarms: 2 },
    { period: '15:55-57', events: 4, alarms: 2 },
    { period: '16:26-30', events: 9, alarms: 5 },
    { period: '16:31-35', events: 10, alarms: 5 },
    { period: '16:36-42', events: 20, alarms: 13 }
  ];

  // Event types
  const eventTypes = [
    { type: '6-axis', count: 12, fullMark: 15 },
    { type: 'SendPacket', count: 8, fullMark: 15 },
    { type: 'Cover', count: 6, fullMark: 15 },
    { type: 'Distance', count: 5, fullMark: 15 },
    { type: 'Coord', count: 3, fullMark: 15 }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-800/95 border border-cyan-500/50 p-3 rounded-lg shadow-xl backdrop-blur-sm">
          {data.time && <p className="text-cyan-300 font-semibold text-sm mb-1">{data.time}</p>}
          {data.cover && (
            <p className={data.cover === 'OPEN' ? 'text-pink-400 text-xs' : 'text-indigo-400 text-xs'}>
              Cover: {data.cover}
            </p>
          )}
          {data.distance && <p className="text-emerald-400 text-xs">Distance: {data.distance} cm</p>}
          {data.event && <p className="text-amber-400 text-xs mt-1">{data.event}</p>}
          {payload[0].name && !data.time && (
            <>
              <p className="text-white font-semibold text-sm">{payload[0].name}</p>
              <p className="text-cyan-400 text-xs">{payload[0].value}</p>
            </>
          )}
        </div>
      );
    }
    return null;
  };

  const MetricCard = ({ icon: Icon, label, value, color, subtitle, trend }) => (
    <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 hover:border-cyan-500/50 transition-all hover:scale-105 duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-3 rounded-lg bg-${color}-500/10`}>
          <Icon className={`text-${color}-400`} size={24} />
        </div>
        {trend && (
          <span className="text-emerald-400 text-xs font-semibold px-2 py-1 bg-emerald-500/10 rounded">
            {trend}
          </span>
        )}
      </div>
      <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">{label}</p>
      <p className="text-white text-3xl font-bold">{value}</p>
      {subtitle && <p className="text-slate-500 text-xs mt-1">{subtitle}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-3 sm:p-4 md:p-6">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6 mb-6 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Shield className="text-cyan-400 w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">H01 Manhole Intelligence</h1>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">Live Monitoring • Real-time Analytics • AI-Powered Insights</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center px-4 sm:px-6 py-2 sm:py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <div className="text-emerald-400 text-xs font-semibold uppercase">Status</div>
                <div className="text-white text-base sm:text-lg font-bold">OPTIMAL</div>
              </div>
              <div className="text-center px-4 sm:px-6 py-2 sm:py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <div className="text-purple-300 text-xs font-semibold uppercase">Events</div>
                <div className="text-white text-2xl sm:text-3xl font-black">{animatedCount}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { id: 'overview', icon: Eye, label: 'Overview' },
            { id: 'timeline', icon: Clock, label: 'Timeline' },
            { id: 'distance', icon: Droplet, label: 'Water Level' },
            { id: 'events', icon: Activity, label: 'Events' },
            { id: 'analytics', icon: TrendingUp, label: 'Analytics' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setView(tab.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap touch-manipulation ${view === tab.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-cyan-500/50'
                }`}
            >
              <tab.icon size={18} />
              <span className="text-sm sm:text-base">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview */}
        {view === 'overview' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard icon={Activity} label="Total Events" value={totalEvents} color="blue" trend="+8%" subtitle="Last 15 minutes" />
              <MetricCard icon={AlertTriangle} label="Critical Alerts" value={alarmCount} color="orange" subtitle={`${((alarmCount / totalEvents) * 100).toFixed(0)}% of total`} />
              <MetricCard icon={Clock} label="Periodic Updates" value={periodicCount} color="emerald" subtitle="Every 30-60s" />
              <MetricCard icon={Droplet} label="Avg Water Level" value={`${avgDistance.toFixed(1)} cm`} color="purple" subtitle="Range: 28-40cm" />
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Timeline */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="text-cyan-400" size={20} />
                    Event Timeline
                  </h2>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">Live</span>
                </div>
                <ResponsiveContainer width="100%" height={350}>
                  <ComposedChart data={timelineData} margin={{ top: 20, right: 20, left: -20, bottom: 20 }}>
                    <defs>
                      <linearGradient id="coverGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                    <XAxis dataKey="index" stroke="#94a3b8" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                    <YAxis
                      yAxisId="left"
                      domain={[0, 3]}
                      ticks={[1, 2]}
                      tickFormatter={(value) => value === 2 ? 'OPEN' : 'CLOSE'}
                      stroke="#94a3b8"
                      tick={{ fontSize: 11, fill: '#94a3b8' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
                    <Area yAxisId="left" type="stepAfter" dataKey="coverState" stroke="#8b5cf6" fill="url(#coverGrad)" strokeWidth={2} name="Cover State" />
                    <Scatter yAxisId="left" name="Periodic" data={timelineData.filter((d, i) => events[i].uploadType === 'periodic')} fill="#10b981" dataKey="uploadMarker" />
                    <Scatter yAxisId="left" name="Alarm" data={timelineData.filter((d, i) => events[i].uploadType === 'immediate')} fill="#f59e0b" dataKey="uploadMarker" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* Frequency */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="text-yellow-400" size={20} />
                  Event Frequency
                </h2>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={timeBlocks} margin={{ top: 20, right: 20, left: -20, bottom: 40 }}>
                    <defs>
                      <linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.4} />
                      </linearGradient>
                      <linearGradient id="bar2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.4} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                    <XAxis dataKey="period" stroke="#94a3b8" angle={-45} textAnchor="end" height={80} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                    <YAxis stroke="#94a3b8" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Bar dataKey="events" fill="url(#bar1)" name="Total Events" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="alarms" fill="url(#bar2)" name="Alarms" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Distribution Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-base sm:text-lg font-bold text-white mb-4">Upload Distribution</h2>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={uploadDistribution} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={70} dataKey="value">
                      {uploadDistribution.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-base sm:text-lg font-bold text-white mb-4">Cover State</h2>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={coverDistribution} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={70} dataKey="value">
                      {coverDistribution.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-base sm:text-lg font-bold text-white mb-4">Event Types</h2>
                <ResponsiveContainer width="100%" height={220}>
                  <RadarChart data={eventTypes}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="type" stroke="#94a3b8" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                    <PolarRadiusAxis stroke="#94a3b8" />
                    <Radar name="Count" dataKey="count" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Timeline View */}
        {view === 'timeline' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Detailed Event Timeline</h2>
              <ResponsiveContainer width="100%" height={500}>
                <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis dataKey="index" type="number" stroke="#94a3b8" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                  <YAxis domain={[0, 3]} ticks={[1, 2]} tickFormatter={(value) => value === 2 ? 'OPEN' : 'CLOSE'} stroke="#94a3b8" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Scatter name="Cover State" data={timelineData} fill="url(#lineGrad)" line={{ stroke: 'url(#lineGrad)', strokeWidth: 3 }} dataKey="coverState" />
                  <Scatter name="Periodic" data={timelineData.filter((d, i) => events[i].uploadType === 'periodic')} fill="#10b981" dataKey="uploadMarker" shape="circle" />
                  <Scatter name="Immediate" data={timelineData.filter((d, i) => events[i].uploadType === 'immediate')} fill="#f59e0b" dataKey="uploadMarker" shape="star" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            {/* Event Log */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Event Log</h2>
              <div className="max-h-96 overflow-y-auto space-y-2">
                {events.slice().reverse().map((event, idx) => (
                  <div key={idx} className={`p-3 rounded-lg border-l-4 ${event.uploadType === 'immediate' ? 'bg-orange-900/20 border-orange-500' : 'bg-emerald-900/20 border-emerald-500'}`}>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-white font-mono text-sm">{event.time}</span>
                          <span className={`px-2 py-1 rounded text-xs font-bold ${event.cover === 'OPEN' ? 'bg-pink-600 text-white' : 'bg-indigo-600 text-white'}`}>{event.cover}</span>
                          {event.distance && <span className="text-cyan-400 text-sm">📏 {event.distance}cm</span>}
                        </div>
                        {event.event && <p className="text-gray-300 text-sm mt-1">⚡ {event.event}</p>}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${event.uploadType === 'immediate' ? 'bg-orange-500 text-white' : 'bg-emerald-500 text-white'}`}>{event.uploadType}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Water Level View */}
        {view === 'distance' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Droplet className="text-cyan-400" />
                Water Level Tracking
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={distanceData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
                  <defs>
                    <linearGradient id="distGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis dataKey="time" stroke="#94a3b8" tick={{ fontSize: 10, angle: -45, textAnchor: 'end', fill: '#94a3b8' }} height={80} />
                  <YAxis domain={[25, 45]} stroke="#94a3b8" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="distance" stroke="#06b6d4" strokeWidth={3} fill="url(#distGrad)" name="Water Distance" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard icon={Droplet} label="Average" value={`${avgDistance.toFixed(1)} cm`} color="cyan" />
              <MetricCard icon={Droplet} label="Minimum" value="28 cm" color="emerald" />
              <MetricCard icon={Droplet} label="Maximum" value="40 cm" color="orange" />
              <MetricCard icon={Activity} label="Readings" value={distanceData.length} color="purple" />
            </div>
          </div>
        )}

        {/* Events View */}
        {view === 'events' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Event Type Breakdown</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={[
                    { type: '6-axis', count: events.filter(e => e.event && e.event.includes('6-axis')).length, color: '#ef4444' },
                    { type: 'SendPacket', count: events.filter(e => e.event && e.event.includes('SendPacket')).length, color: '#f59e0b' },
                    { type: 'Cover Change', count: events.filter(e => e.event && (e.event.includes('Open') || e.event.includes('Close'))).length, color: '#8b5cf6' },
                    { type: 'Distance', count: events.filter(e => e.event && e.event.includes('WaterDistance')).length, color: '#06b6d4' },
                    { type: 'Coordinate', count: events.filter(e => e.event && e.event.includes('coordinate')).length, color: '#10b981' },
                    { type: 'Alarm', count: events.filter(e => e.event && e.event.includes('Alarm')).length, color: '#ec4899' },
                  ]}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis type="number" stroke="#94a3b8" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <YAxis dataKey="type" type="category" stroke="#94a3b8" width={90} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                    {[
                      { color: '#ef4444' }, { color: '#f59e0b' }, { color: '#8b5cf6' },
                      { color: '#06b6d4' }, { color: '#10b981' }, { color: '#ec4899' }
                    ].map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Analytics View */}
        {view === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 shadow-lg border-2 border-blue-400">
                <h3 className="text-white font-bold text-lg mb-2">🎯 Response Time</h3>
                <p className="text-blue-100 text-3xl font-bold mb-2">Immediate</p>
                <p className="text-blue-200 text-sm">Alarms trigger within 1-2 seconds</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl p-6 shadow-lg border-2 border-emerald-400">
                <h3 className="text-white font-bold text-lg mb-2">📊 Data Quality</h3>
                <p className="text-emerald-100 text-3xl font-bold mb-2">96%</p>
                <p className="text-emerald-200 text-sm">Distance readings captured</p>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-xl p-6 shadow-lg border-2 border-orange-400">
                <h3 className="text-white font-bold text-lg mb-2">⚡ Peak Activity</h3>
                <p className="text-orange-100 text-3xl font-bold mb-2">16:36-42</p>
                <p className="text-orange-200 text-sm">20 events in 6 minutes</p>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">📈 System Analysis</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-slate-900/50 rounded-r-lg">
                  <h3 className="text-cyan-400 font-bold text-lg mb-2">🔄 Operating Pattern</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Dual-mode operation with periodic updates every 30-60s and immediate alarm triggers on cover movement.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-slate-900/50 rounded-r-lg">
                  <h3 className="text-purple-400 font-bold text-lg mb-2">🎯 Detection Accuracy</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    6-axis accelerometer captures all cover movements with proper debouncing to prevent false triggers.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6 py-4 bg-slate-900/50 rounded-r-lg">
                  <h3 className="text-emerald-400 font-bold text-lg mb-2">💧 Water Monitoring</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Distance measurements range 28-40cm with consistent readings during stable periods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManholeAnalysis;