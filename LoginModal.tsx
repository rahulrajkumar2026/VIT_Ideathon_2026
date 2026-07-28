'use client';

import { useState } from 'react';
import { Wand2, X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');

  const handleLogin = async () => {
    setIsLoading(true);
    setLoadingText('Alohomora... Opening Room');
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    onLogin();
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-8 bg-slate-900/90 border border-amber-500/30 rounded-lg shadow-[0_0_30px_rgba(251,191,36,0.2)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-amber-400 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="inline-block p-3 mb-4 bg-amber-500/10 rounded-full">
            <Wand2 className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-2xl font-bold text-amber-400 mb-2">Enter the Room</h2>
          <p className="text-slate-400 italic font-serif">You See It When You Need It</p>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 mb-6">
          <p className="text-amber-400 text-sm text-center">
            ✨ Demo Credentials Pre-filled. Click 'Quick Magic Login' to enter.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
            <input
              type="text"
              defaultValue="potter_student"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input
              type="password"
              defaultValue="lumos123"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
              readOnly
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:shadow-[0_0_25px_rgba(251,191,36,0.6)]"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                <span>{loadingText}</span>
              </>
            ) : (
              <>
                <Wand2 size={20} />
                <span>Quick Magic Login</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
