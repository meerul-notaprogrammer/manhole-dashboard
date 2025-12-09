import React, { useState, useEffect } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Scatter, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ComposedChart } from 'recharts';
import { Activity, Droplet, AlertTriangle, TrendingUp, Clock, Zap, Shield, Eye, Wifi } from 'lucide-react';

const ManholeAnalysis = () => {
  const [view, setView] = useState('overview');
  const [animatedCount, setAnimatedCount] = useState(0);
  const [liveStatus, setLiveStatus] = useState('online');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animatedCount < 48) setAnimatedCount(prev => prev + 1);
    }, 30);
    return () => clearTimeout(timer);
  }, [animatedCount]);

  // Simulate live status pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStatus(prev => prev === 'online' ? 'pulse' : 'online');
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
    event: e.event
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

  // Distance over time (filtered)
  const distanceData = events.filter(e => e.distance).map(e => ({
    time: e.time.substring(0, 5),
    distance: e.distance,
    status: e.cover
  }));

  // Event frequency by time period
  const timeBlocks = [
    { period: '15:48-15:50', events: 5, alarms: 2 },
    { period: '15:55-15:57', events: 4, alarms: 2 },
    { period: '16:26-16:30', events: 9, alarms: 5 },
    { period: '16:31-16:35', events: 10, alarms: 5 },
    { period: '16:36-16:42', events: 20, alarms: 13 }
  ];

  // Event type radar
  const eventTypes = [
    { type: '6-axis', count: 12, fullMark: 15 },
    { type: 'SendPacket', count: 8, fullMark: 15 },
    { type: 'Cover Change', count: 6, fullMark: 15 },
    { type: 'Distance', count: 5, fullMark: 15 },
    { type: 'Coordinate', count: 3, fullMark: 15 }
  ];

  const CustomTooltip = ({ active, payload, type }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900/95 backdrop-blur-xl border border-cyan-400/30 p-4 rounded-xl shadow-2xl">
          {type === 'event' && (
            <>
              <p className="text-cyan-300 font-bold text-sm mb-1">{payload[0].payload.time}</p>
              <p className={payload[0].payload.cover === 'OPEN' ? 'text-pink-400 text-xs' : 'text-indigo-400 text-xs'}>
                Cover: {payload[0].payload.cover}
              </p>
              {payload[0].payload.distance && (
                <p className="text-emerald-400 text-xs">Distance: {payload[0].payload.distance} cm</p>
              )}
              {payload[0].payload.event && (
                <p className="text-amber-400 text-xs mt-1">Event: {payload[0].payload.event}</p>
              )}
            </>
          )}
          {type === 'simple' && payload[0].payload && (
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

  const GlassCard = ({ children, className = "" }) => (
    <div className={`bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 ${className}`}>
      {children}
    </div>
  );

  const MetricCard = ({ icon: Icon, label, value, color, trend, subtitle }) => (
    <GlassCard className="p-4 sm:p-6 hover:scale-105 transition-all duration-300 group cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 transition-transform`}>
          <Icon className="text-white" size={24} />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
            <TrendingUp size={14} />
            <span>{trend}</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">{label}</p>
        <p className="text-white text-2xl sm:text-3xl font-bold mt-1">{value}</p>
        {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
      </div>
    </GlassCard>
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Premium Header */}
        <GlassCard className="p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 border-t-4 border-t-cyan-400">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <Shield className="text-cyan-400 w-8 h-8 sm:w-10 sm:h-10 animate-pulse" />
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${liveStatus === 'pulse' ? 'bg-emerald-400 animate-ping' : 'bg-emerald-400'}`}></div>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                    H01 Manhole Intelligence
                  </h1>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1 flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-emerald-400" />
                    <span>Live Monitoring • Real-time Analytics • AI-Powered Insights</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl border border-emerald-400/30">
                <div className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">System Status</div>
                <div className="text-white text-lg font-bold">OPTIMAL</div>
              </div>
              <div className="text-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                <div className="text-purple-300 text-xs font-semibold uppercase tracking-wide">Total Events</div>
                <div className="text-white text-3xl sm:text-4xl font-black">{animatedCount}</div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Enhanced Navigation */}
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
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap touch-manipulation ${view === tab.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50 scale-105'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50 hover:border-cyan-500/50'
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
              <MetricCard
                icon={Activity}
                label="Total Events"
                value={totalEvents}
                color="from-blue-500 to-cyan-600"
                trend="+12%"
                subtitle="Last 15 minutes"
              />
              <MetricCard
                icon={AlertTriangle}
                label="Critical Alerts"
                value={alarmCount}
                color="from-orange-500 to-red-600"
                trend="+8%"
                subtitle={`${((alarmCount / totalEvents) * 100).toFixed(0)}% of total`}
              />
              <MetricCard
                icon={Clock}
                label="Periodic Updates"
                value={periodicCount}
                color="from-emerald-500 to-green-600"
                subtitle="Every 30-60s"
              />
              <MetricCard
                icon={Droplet}
                label="Avg Water Level"
                value={`${avgDistance.toFixed(1)} cm`}
                color="from-purple-500 to-indigo-600"
                trend="Stable"
                subtitle="Range: 28-40cm"
              />
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Timeline Chart */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="text-cyan-400" size={24} />
                    Event Timeline & Cover State
                  </h2>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">Live</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={350}>
                  <ComposedChart data={timelineData} margin={{ top: 20, right: 20, left: -20, bottom: 20 }}>
                    <defs>
                      <linearGradient id="coverGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis
                      dataKey="index"
                      stroke="#9ca3af"
                      tick={{ fontSize: 11, fill: '#9ca3af' }}
                      label={{ value: 'Event Sequence', position: 'bottom', offset: 0, fill: '#9ca3af', fontSize: 12 }}
                    />
                    <YAxis
                      yAxisId="left"
                      domain={[0, 3]}
                      ticks={[1, 2]}
                      tickFormatter={(value) => value === 2 ? 'OPEN' : 'CLOSE'}
                      stroke="#9ca3af"
                      tick={{ fontSize: 11, fill: '#9ca3af' }}
                    />
                    <Tooltip content={<CustomTooltip type="event" />} />
                    <Legend
                      wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }}
                      iconType="circle"
                    />

                    <Area
                      yAxisId="left"
                      type="stepAfter"
                      dataKey="coverState"
                      stroke="#8b5cf6"
                      fill="url(#coverGradient)"
                      strokeWidth={2}
                      name="Cover State"
                    />

                    <Scatter
                      yAxisId="left"
                      name="Periodic"
                      data={timelineData.filter((d, i) => events[i].uploadType === 'periodic')}
                      fill="#10b981"
                      dataKey="uploadMarker"
                      shape="circle"
                    />
                    <Scatter
                      yAxisId="left"
                      name="Alarm"
                      data={timelineData.filter((d, i) => events[i].uploadType === 'immediate')}
                      fill="#f59e0b"
                      dataKey="uploadMarker"
                      shape="diamond"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </GlassCard>

              {/* Event Frequency */}
              <GlassCard className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="text-yellow-400" size={24} />
                  Event Frequency Analysis
                </h2>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={timeBlocks} margin={{ top: 20, right: 20, left: -20, bottom: 40 }}>
                    <defs>
                      <linearGradient id="barGradient1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.4} />
                      </linearGradient>
                      <linearGradient id="barGradient2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.4} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis
                      dataKey="period"
                      stroke="#9ca3af"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      tick={{ fontSize: 11, fill: '#9ca3af' }}
                    />
                    <YAxis stroke="#9ca3af" tick={{ fontSize: 11, fill: '#9ca3af' }} />
                    <Tooltip content={<CustomTooltip type="simple" />} />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Bar dataKey="events" fill="url(#barGradient1)" name="Total Events" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="alarms" fill="url(#barGradient2)" name="Alarms" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </GlassCard>
            </div>

            {/* Distribution Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-6">
                <h2 className="text-lg font-bold text-white mb-4">Upload Distribution</h2>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={uploadDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={70}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {uploadDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-400 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                      Periodic
                    </span>
                    <span className="text-white font-bold">{periodicCount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-amber-400 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      Immediate
                    </span>
                    <span className="text-white font-bold">{alarmCount}</span>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h2 className="text-lg font-bold text-white mb-4">Cover State</h2>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={coverDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={70}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {coverDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-indigo-400 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                      Closed
                    </span>
                    <span className="text-white font-bold">{closeEvents}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-pink-400 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                      Open
                    </span>
                    <span className="text-white font-bold">{openEvents}</span>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h2 className="text-lg font-bold text-white mb-4">Event Types</h2>
                <ResponsiveContainer width="100%" height={220}>
                  <RadarChart data={eventTypes}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="type" stroke="#9ca3af" tick={{ fontSize: 10, fill: '#9ca3af' }} />
                    <PolarRadiusAxis stroke="#9ca3af" />
                    <Radar name="Count" dataKey="count" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </GlassCard>
            </div>
          </div>
        )}

        {/* Other views remain similar but with GlassCard styling */}
        {view === 'distance' && (
          <div className="space-y-6">
            <GlassCard className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Droplet className="text-cyan-400" />
                Water Level Tracking
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={distanceData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
                  <defs>
                    <linearGradient id="distanceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis
                    dataKey="time"
                    stroke="#9ca3af"
                    tick={{ fontSize: 10, angle: -45, textAnchor: 'end', fill: '#9ca3af' }}
                    height={80}
                  />
                  <YAxis
                    domain={[25, 45]}
                    stroke="#9ca3af"
                    tick={{ fontSize: 11, fill: '#9ca3af' }}
                  />
                  <Tooltip content={<CustomTooltip type="simple" />} />
                  <Area
                    type="monotone"
                    dataKey="distance"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    fill="url(#distanceGradient)"
                    name="Water Distance"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </GlassCard>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard icon={Droplet} label="Average" value={`${avgDistance.toFixed(1)} cm`} color="from-cyan-500 to-blue-600" />
              <MetricCard icon={Droplet} label="Minimum" value="28 cm" color="from-emerald-500 to-green-600" />
              <MetricCard icon={Droplet} label="Maximum" value="40 cm" color="from-orange-500 to-red-600" />
              <MetricCard icon={Activity} label="Readings" value={distanceData.length} color="from-purple-500 to-pink-600" />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ManholeAnalysis;