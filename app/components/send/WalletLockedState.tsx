import React from 'react';
import { Card } from "@/components/ui/Card";

export function WalletLockedState() {
  return (
    <Card title="Send Tokens" className="animate-in fade-in zoom-in duration-500">
      <div className="text-center py-12 text-white/60">
        <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <p className="text-lg font-medium text-white">Wallet Locked</p>
        <p className="text-sm mt-2">Please connect your wallet to continue.</p>
      </div>
    </Card>
  );
}
