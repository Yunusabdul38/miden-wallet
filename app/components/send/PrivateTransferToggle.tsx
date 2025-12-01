import React from 'react';

interface PrivateTransferToggleProps {
  isPrivate: boolean;
  setIsPrivate: (value: boolean) => void;
}

export function PrivateTransferToggle({ isPrivate, setIsPrivate }: PrivateTransferToggleProps) {
  return (
    <div className="relative overflow-hidden p-5 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
      <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-base font-medium text-white flex items-center gap-2">
            Private Transfer
            {isPrivate && (
              <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded-full border border-orange-500/20 animate-in fade-in zoom-in">
                Active
              </span>
            )}
          </span>
          <p className="text-xs text-white/50 max-w-[200px]">
            {isPrivate ? "Recipient receives a private note file." : "Standard public blockchain transfer."}
          </p>
        </div>
        <button
          onClick={() => setIsPrivate(!isPrivate)}
          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black ${
            isPrivate ? 'bg-gradient-to-r from-orange-600 to-amber-600 shadow-lg shadow-orange-500/20' : 'bg-white/10'
          }`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
              isPrivate ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
