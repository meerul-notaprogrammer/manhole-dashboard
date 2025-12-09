import { useState, useEffect } from 'react';
import { User } from 'lucide-react';

interface RoomData {
  id: string;
  name: string;
  doctor: string;
  temperature: number;
  humidity: number;
  status: 'normal' | 'warning' | 'critical';
}

const initialRooms: RoomData[] = [
  { id: '1', name: 'Waiting Room', doctor: 'Dr.Chitrasen Sahu', temperature: 22, humidity: 45, status: 'normal' },
  { id: '2', name: 'Waiting Room', doctor: 'Dr.Chitrasen Sahu', temperature: 23, humidity: 48, status: 'normal' },
  { id: '3', name: 'Waiting Room', doctor: 'Dr.Chitrasen Sahu', temperature: 25, humidity: 52, status: 'warning' },
  { id: '4', name: 'Waiting Room', doctor: 'Dr.Chitrasen Sahu', temperature: 21, humidity: 43, status: 'normal' },
  { id: '5', name: 'Waiting Room', doctor: 'Dr.Chitrasen Sahu', temperature: 24, humidity: 50, status: 'normal' },
  { id: '6', name: 'Waiting Room', doctor: 'Dr.Chitrasen Sahu', temperature: 22, humidity: 46, status: 'normal' },
];

export function RealTimeData() {
  const [rooms, setRooms] = useState<RoomData[]>(initialRooms);

  useEffect(() => {
    const interval = setInterval(() => {
      setRooms(prevRooms => 
        prevRooms.map(room => {
          const temp = Math.floor(Math.random() * 6) + 20;
          const humidity = Math.floor(Math.random() * 15) + 40;
          let status: 'normal' | 'warning' | 'critical' = 'normal';
          
          if (temp > 24 || humidity > 55) status = 'warning';
          if (temp > 26 || humidity > 60) status = 'critical';
          
          return { ...room, temperature: temp, humidity, status };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <h3 className="text-cyan-300 text-sm">Real Time Data</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {rooms.map((room) => (
          <div 
            key={room.id}
            className={`bg-slate-950/60 border rounded-lg p-4 relative overflow-hidden group hover:scale-[1.02] transition-all ${
              room.status === 'critical' 
                ? 'border-red-500/40 shadow-lg shadow-red-500/10' 
                : room.status === 'warning'
                ? 'border-yellow-500/40 shadow-lg shadow-yellow-500/10'
                : 'border-cyan-500/20 shadow-lg shadow-cyan-500/5'
            }`}
          >
            {/* Glowing edge effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
              room.status === 'critical' ? 'bg-gradient-to-br from-red-500/10 to-transparent' :
              room.status === 'warning' ? 'bg-gradient-to-br from-yellow-500/10 to-transparent' :
              'bg-gradient-to-br from-cyan-500/10 to-transparent'
            }`}></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  room.status === 'critical' ? 'bg-red-500/20' :
                  room.status === 'warning' ? 'bg-yellow-500/20' :
                  'bg-cyan-500/20'
                }`}>
                  <User className={`w-5 h-5 ${
                    room.status === 'critical' ? 'text-red-400' :
                    room.status === 'warning' ? 'text-yellow-400' :
                    'text-cyan-400'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-cyan-100 text-sm mb-1">{room.name}</div>
                  <div className="text-xs text-cyan-400/60">{room.doctor}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className={`rounded-lg px-3 py-2 border ${
                  room.temperature > 24 ? 'bg-yellow-500/10 border-yellow-500/30' : 'bg-emerald-500/10 border-emerald-500/30'
                }`}>
                  <div className="text-xs text-cyan-400/60 mb-1">Temperature</div>
                  <div className={`text-sm ${room.temperature > 24 ? 'text-yellow-400' : 'text-emerald-400'}`}>
                    {room.temperature}°C
                  </div>
                </div>
                
                <div className={`rounded-lg px-3 py-2 border ${
                  room.humidity > 50 ? 'bg-red-500/10 border-red-500/30' : 'bg-emerald-500/10 border-emerald-500/30'
                }`}>
                  <div className="text-xs text-cyan-400/60 mb-1">Humidity</div>
                  <div className={`text-sm ${room.humidity > 50 ? 'text-red-400' : 'text-emerald-400'}`}>
                    {room.humidity}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}