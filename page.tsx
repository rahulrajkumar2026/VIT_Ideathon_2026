'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import LoginModal from '@/components/LoginModal';
import DashboardView from '@/components/DashboardView';
import SpacedPlanView from '@/components/SpacedPlanView';
import ProgressView from '@/components/ProgressView';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [activeTab, setActiveTab] = useState('room');
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSummonSchedule = () => {
    setShowOnboarding(true);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'room':
        return <DashboardView />;
      case 'spaced':
        return <SpacedPlanView />;
      case 'progress':
        return <ProgressView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />

      {isLoggedIn && (
        <>
          <Header
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onSummonSchedule={handleSummonSchedule}
          />
          <div className="min-h-[calc(100vh-80px)]">
            {renderActiveView()}
          </div>
        </>
      )}

      {/* Onboarding Modal - Placeholder for future implementation */}
      {showOnboarding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-8 bg-slate-900/90 border border-amber-500/30 rounded-lg shadow-[0_0_30px_rgba(251,191,36,0.2)]">
            <button
              onClick={() => setShowOnboarding(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-amber-400 transition-colors"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Summon Your Schedule</h2>
            <p className="text-slate-300 mb-6">
              This feature will allow you to create and customize your study schedule. Coming soon!
            </p>
            <button
              onClick={() => setShowOnboarding(false)}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-lg transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
