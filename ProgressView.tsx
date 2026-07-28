'use client';

import { TrendingUp, Award, Target, BarChart3, Clock, BookOpen } from 'lucide-react';

export default function ProgressView() {
  const subjectProgress = [
    { subject: 'Potions', progress: 85, color: 'bg-purple-500' },
    { subject: 'Charms', progress: 72, color: 'bg-blue-500' },
    { subject: 'Transfiguration', progress: 68, color: 'bg-green-500' },
    { subject: 'Defense Against Dark Arts', progress: 90, color: 'bg-red-500' },
    { subject: 'Herbology', progress: 55, color: 'bg-emerald-500' },
    { subject: 'History of Magic', progress: 45, color: 'bg-amber-500' },
  ];

  const achievements = [
    { icon: '🏆', title: 'First Steps', description: 'Complete your first study session', unlocked: true },
    { icon: '🔥', title: 'Week Warrior', description: 'Maintain a 7-day streak', unlocked: true },
    { icon: '📚', title: 'Bookworm', description: 'Study 50 hours total', unlocked: true },
    { icon: '⚡', title: 'Focus Master', description: 'Achieve 90% focus score', unlocked: false },
    { icon: '🌟', title: 'Perfect Week', description: 'Complete all daily tasks', unlocked: false },
    { icon: '🎯', title: 'Goal Setter', description: 'Achieve monthly goals', unlocked: false },
  ];

  const weeklyStats = [
    { label: 'Study Hours', value: '24.5h', change: '+12%', icon: Clock },
    { label: 'Tasks Completed', value: '18', change: '+8%', icon: Target },
    { label: 'Focus Score', value: '87%', change: '+5%', icon: TrendingUp },
    { label: 'Subjects Active', value: '6', change: '+0', icon: BookOpen },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-amber-400 mb-2">Your Progress</h2>
        <p className="text-slate-400 italic font-serif">Track your magical journey through knowledge</p>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {weeklyStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-900/90 border border-amber-500/20 rounded-lg p-4 hover:border-amber-500/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5 text-amber-400" />
              <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-slate-400'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-slate-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Subject Progress */}
      <div className="bg-slate-900/90 border border-amber-500/20 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-amber-400">Subject Mastery</h3>
          <div className="flex items-center gap-2 text-slate-400">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm">Overall: 69%</span>
          </div>
        </div>
        <div className="space-y-4">
          {subjectProgress.map((item) => (
            <div key={item.subject}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{item.subject}</span>
                <span className="text-slate-400 text-sm">{item.progress}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-500`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-slate-900/90 border border-amber-500/20 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-amber-400">Achievements</h3>
          <div className="flex items-center gap-2 text-slate-400">
            <Award className="w-4 h-4" />
            <span className="text-sm">3/6 Unlocked</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                achievement.unlocked
                  ? 'bg-amber-500/10 border-amber-500/30'
                  : 'bg-slate-800/50 border-slate-700 opacity-50'
              }`}
            >
              <div className={`text-3xl mb-2 ${achievement.unlocked ? '' : 'grayscale'}`}>
                {achievement.icon}
              </div>
              <h4 className="text-white font-semibold mb-1">{achievement.title}</h4>
              <p className="text-slate-400 text-sm">{achievement.description}</p>
              {achievement.unlocked && (
                <div className="mt-2 text-xs text-amber-400">✓ Unlocked</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Study Streak Calendar */}
      <div className="bg-slate-900/90 border border-amber-500/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-amber-400 mb-4">Study Streak</h3>
        <div className="grid grid-cols-7 gap-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
            <div key={day} className="text-center text-slate-400 text-xs mb-2">{day}</div>
          ))}
          {Array.from({ length: 28 }).map((_, i) => {
            const isActive = i < 5 || (i >= 7 && i < 12) || (i >= 14 && i < 19);
            return (
              <div
                key={i}
                className={`aspect-square rounded flex items-center justify-center text-xs ${
                  isActive
                    ? 'bg-amber-500/80 text-slate-950 font-semibold'
                    : 'bg-slate-800/50 text-slate-500'
                }`}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500/80 rounded" />
            <span className="text-slate-400">Studied</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-800/50 rounded" />
            <span className="text-slate-400">Rest Day</span>
          </div>
          <div className="text-amber-400 font-semibold">Current Streak: 5 Days</div>
        </div>
      </div>
    </div>
  );
}
