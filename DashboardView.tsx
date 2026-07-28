'use client';

import { BookOpen, Clock, Target, Zap } from 'lucide-react';

export default function DashboardView() {
  const stats = [
    { icon: BookOpen, label: 'Subjects', value: '6', color: 'text-blue-400' },
    { icon: Clock, label: 'Study Hours', value: '24.5', color: 'text-green-400' },
    { icon: Target, label: 'Tasks Done', value: '18/25', color: 'text-purple-400' },
    { icon: Zap, label: 'Focus Score', value: '87%', color: 'text-amber-400' },
  ];

  const upcomingTasks = [
    { subject: 'Potions', task: 'Complete Polyjuice Potion Essay', time: '2:00 PM', priority: 'high' },
    { subject: 'Defense Against Dark Arts', task: 'Practice Shield Charms', time: '4:00 PM', priority: 'medium' },
    { subject: 'Transfiguration', task: 'Read Chapter 7: Animagi', time: '6:00 PM', priority: 'low' },
    { subject: 'Charms', task: 'Wand Movement Practice', time: '8:00 PM', priority: 'medium' },
  ];

  const priorityColors = {
    high: 'bg-red-500/20 text-red-400 border-red-500/30',
    medium: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    low: 'bg-green-500/20 text-green-400 border-green-500/30',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-amber-400 mb-2">Welcome back, Student</h2>
        <p className="text-slate-400 italic font-serif">The Room reveals what you truly need</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-900/90 border border-amber-500/20 rounded-lg p-4 hover:border-amber-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="text-slate-400 text-sm">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <div className="bg-slate-900/90 border border-amber-500/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-amber-400 mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            {upcomingTasks.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all duration-300"
              >
                <div className="flex-1">
                  <p className="text-white font-medium">{item.task}</p>
                  <p className="text-slate-400 text-sm">{item.subject}</p>
                </div>
                <div className="text-right">
                  <p className="text-amber-400 text-sm">{item.time}</p>
                  <span
                    className={`inline-block px-2 py-0.5 text-xs rounded border ${priorityColors[item.priority]}`}
                  >
                    {item.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-900/90 border border-amber-500/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-amber-400 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition-all duration-300 text-left">
              <div className="text-2xl mb-2">📚</div>
              <p className="text-white font-medium">Add Subject</p>
              <p className="text-slate-400 text-sm">Create new study area</p>
            </button>
            <button className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition-all duration-300 text-left">
              <div className="text-2xl mb-2">⏰</div>
              <p className="text-white font-medium">Set Timer</p>
              <p className="text-slate-400 text-sm">Pomodoro session</p>
            </button>
            <button className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition-all duration-300 text-left">
              <div className="text-2xl mb-2">📝</div>
              <p className="text-white font-medium">Quick Note</p>
              <p className="text-slate-400 text-sm">Jot down thoughts</p>
            </button>
            <button className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition-all duration-300 text-left">
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-white font-medium">Set Goal</p>
              <p className="text-slate-400 text-sm">Daily target</p>
            </button>
          </div>
        </div>
      </div>

      {/* Motivational Banner */}
      <div className="mt-6 p-6 bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-500/30 rounded-lg">
        <p className="text-center text-amber-400 italic font-serif text-lg">
          "It does not do to dwell on dreams and forget to live."
        </p>
        <p className="text-center text-slate-400 text-sm mt-2">— Albus Dumbledore</p>
      </div>
    </div>
  );
}
