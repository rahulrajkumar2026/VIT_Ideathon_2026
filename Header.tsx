'use client';

import { DoorClosed, Flame, Plus } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onSummonSchedule: () => void;
}

export default function Header({ activeTab, onTabChange, onSummonSchedule }: HeaderProps) {
  const tabs = [
    { id: 'room', label: '🔮 The Room', description: 'Dashboard' },
    { id: 'spaced', label: '📜 Spaced Plan', description: 'Weekly Calendar' },
    { id: 'progress', label: '📊 Progress', description: 'Analytics' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 shadow-[0_0_20px_rgba(251,191,36,0.1)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl animate-glow" />
              <div className="relative p-2 bg-amber-500/10 rounded-full border border-amber-500/30">
                <DoorClosed className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-amber-400">The Room of Requirement</h1>
              <p className="text-sm text-slate-400 italic font-serif">You See It When You Need It</p>
            </div>
          </div>

          {/* Center - Tabs Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50 shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                    : 'text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 border border-transparent'
                }`}
              >
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Right side - Streak and CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 rounded-full border border-amber-500/30">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-amber-400">5 Day Streak</span>
            </div>
            <button
              onClick={onSummonSchedule}
              className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:shadow-[0_0_25px_rgba(251,191,36,0.6)]"
            >
              <Plus size={18} />
              <span className="hidden sm:inline">Summon Schedule</span>
              <span className="sm:hidden">Summon</span>
            </button>
          </div>
        </div>

        {/* Mobile Tabs */}
        <nav className="flex md:hidden items-center justify-center gap-2 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                activeTab === tab.id
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                  : 'text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 border border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
