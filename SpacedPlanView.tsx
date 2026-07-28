'use client';

import { Calendar, Clock, ChevronRight } from 'lucide-react';

export default function SpacedPlanView() {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const timeSlots = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];

  const schedule = {
    'Mon': [
      { time: '9 AM', subject: 'Potions', topic: 'Polyjuice Potion', color: 'bg-purple-500/20 border-purple-500/30' },
      { time: '2 PM', subject: 'Charms', topic: 'Wand Movements', color: 'bg-blue-500/20 border-blue-500/30' },
      { time: '4 PM', subject: 'DADA', topic: 'Shield Charms', color: 'bg-red-500/20 border-red-500/30' },
    ],
    'Tue': [
      { time: '10 AM', subject: 'Transfiguration', topic: 'Animagi Theory', color: 'bg-green-500/20 border-green-500/30' },
      { time: '3 PM', subject: 'Herbology', topic: 'Magical Plants', color: 'bg-emerald-500/20 border-emerald-500/30' },
    ],
    'Wed': [
      { time: '9 AM', subject: 'Potions', topic: 'Review Session', color: 'bg-purple-500/20 border-purple-500/30' },
      { time: '1 PM', subject: 'History of Magic', topic: 'Goblin Rebellions', color: 'bg-amber-500/20 border-amber-500/30' },
      { time: '5 PM', subject: 'Charms', topic: 'Levitation Practice', color: 'bg-blue-500/20 border-blue-500/30' },
    ],
    'Thu': [
      { time: '11 AM', subject: 'DADA', topic: 'Patronus Charm', color: 'bg-red-500/20 border-red-500/30' },
      { time: '2 PM', subject: 'Astronomy', topic: 'Star Charts', color: 'bg-indigo-500/20 border-indigo-500/30' },
    ],
    'Fri': [
      { time: '10 AM', subject: 'Transfiguration', topic: 'Practical Exam Prep', color: 'bg-green-500/20 border-green-500/30' },
      { time: '3 PM', subject: 'Potions', topic: 'Final Review', color: 'bg-purple-500/20 border-purple-500/30' },
    ],
    'Sat': [
      { time: '9 AM', subject: 'Study Group', topic: 'OWLS Prep', color: 'bg-pink-500/20 border-pink-500/30' },
    ],
    'Sun': [
      { time: '2 PM', subject: 'Rest & Review', topic: 'Light Reading', color: 'bg-slate-500/20 border-slate-500/30' },
    ],
  };

  const getScheduleForDay = (day: string, time: string) => {
    const daySchedule = schedule[day as keyof typeof schedule];
    return daySchedule?.find(item => item.time === time);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-amber-400 mb-2">Spaced Study Plan</h2>
        <p className="text-slate-400 italic font-serif">A well-organized mind is a powerful asset</p>
      </div>

      {/* Week Overview */}
      <div className="bg-slate-900/90 border border-amber-500/20 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-amber-400">Weekly Overview</h3>
          <div className="flex items-center gap-2 text-slate-400">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">July 2026</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className={`p-3 rounded-lg text-center transition-all duration-300 ${
                day === 'Mon'
                  ? 'bg-amber-500/20 border border-amber-500/50'
                  : 'bg-slate-800/50 border border-slate-700 hover:border-amber-500/30'
              }`}
            >
              <p className="text-slate-400 text-xs mb-1">{day}</p>
              <p className="text-white font-semibold">{Math.floor(Math.random() * 28) + 1}</p>
              <p className="text-xs text-amber-400 mt-1">{schedule[day as keyof typeof schedule]?.length || 0} tasks</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Schedule */}
      <div className="bg-slate-900/90 border border-amber-500/20 rounded-lg p-6 overflow-x-auto">
        <h3 className="text-xl font-semibold text-amber-400 mb-4">Detailed Schedule</h3>
        
        <div className="min-w-[800px]">
          {/* Header Row */}
          <div className="grid grid-cols-8 gap-2 mb-2">
            <div className="text-slate-400 text-sm font-medium">Time</div>
            {weekDays.map((day) => (
              <div key={day} className="text-slate-400 text-sm font-medium text-center">{day}</div>
            ))}
          </div>

          {/* Time Slots */}
          {timeSlots.map((time) => (
            <div key={time} className="grid grid-cols-8 gap-2 mb-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Clock className="w-3 h-3" />
                {time}
              </div>
              {weekDays.map((day) => {
                const scheduleItem = getScheduleForDay(day, time);
                return (
                  <div key={`${day}-${time}`} className="min-h-[60px]">
                    {scheduleItem ? (
                      <div
                        className={`p-2 rounded border ${scheduleItem.color} hover:opacity-80 transition-all cursor-pointer`}
                      >
                        <p className="text-white text-xs font-medium">{scheduleItem.subject}</p>
                        <p className="text-slate-300 text-xs truncate">{scheduleItem.topic}</p>
                      </div>
                    ) : (
                      <div className="h-full min-h-[60px] rounded bg-slate-800/30 border border-slate-700/30" />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Spaced Repetition Info */}
      <div className="mt-6 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-500/20 rounded-lg">
            <Calendar className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-purple-400 mb-2">Spaced Repetition Active</h4>
            <p className="text-slate-300 text-sm mb-3">
              Your schedule uses spaced repetition to optimize learning. Review sessions are automatically scheduled at increasing intervals.
            </p>
            <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              <span>Learn more about the algorithm</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
