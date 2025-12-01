"use client";
import React, { useState } from 'react';
import { WalletMultiButton } from "@demox-labs/miden-wallet-adapter";
import SendComponent from "./send";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Miden Wallet
              </h1>
              <p className="text-xs text-white/40 font-medium tracking-wide">TESTNET DEMO</p>
            </div>
          </div>
          <WalletMultiButton />
        </header>

        {/* Main Content */}
        <div className="space-y-8">
          <SendComponent />
          
          <div className="text-center text-xs text-white/20 animate-in fade-in duration-1000 delay-500">
            Powered by Miden Protocol
          </div>
        </div>
      </div>
    </main>
  );
}
