import { useState, useEffect } from 'react';
import { MapPin, Users } from 'lucide-react';

export function MapDisplay() {
  const [temp, setTemp] = useState(23);
  const [activeRoom, setActiveRoom] = useState('Visiting Room 3');

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(Math.floor(Math.random() * 6) + 20);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const rooms = [
    'Visiting Room 1', 'Visiting Room 2', 'Visiting Room 3', 
    'Visiting Room 4', 'Visiting Room 5', 'Visiting Room 6',
    'Visiting Room 7', 'Visiting Room 8'
  ];

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm">Facility Map</h3>
      </div>
      
      <div className="bg-slate-950/60 rounded-lg p-4 border border-cyan-500/20">
        {/* Simplified map representation */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {rooms.map((room, index) => (
            <div
              key={room}
              onClick={() => setActiveRoom(room)}
              className={`p-3 rounded-lg cursor-pointer transition-all border relative overflow-hidden group ${
                activeRoom === room
                  ? 'bg-cyan-500/20 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800/40 border-cyan-500/20 hover:border-cyan-500/40'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="flex items-center gap-2 relative z-10">
                <Users className="w-3 h-3 text-cyan-400" />
                <span className="text-xs text-cyan-100">{room}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Service Area Info */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/40 rounded-lg p-3 shadow-lg shadow-emerald-500/10">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="text-xs text-cyan-400/60 mb-1">Active Service Area</div>
              <div className="text-sm text-cyan-100">{activeRoom}</div>
            </div>
            <MapPin className="w-4 h-4 text-emerald-400 animate-pulse" />
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-900/40 rounded px-2 py-1 border border-cyan-500/20">
              <span className="text-cyan-400/60">Temp: </span>
              <span className="text-emerald-400">{temp}°C</span>
            </div>
            <div className="bg-slate-900/40 rounded px-2 py-1 border border-cyan-500/20">
              <span className="text-cyan-400/60">Status: </span>
              <span className="text-emerald-400">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}