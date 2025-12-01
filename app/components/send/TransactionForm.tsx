import React from 'react';

interface TransactionFormProps {
  recipient: string;
  setRecipient: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
  balance: string | null;
}

export function TransactionForm({ 
  recipient, 
  setRecipient, 
  amount, 
  setAmount, 
  balance 
}: TransactionFormProps) {
  return (
    <div className="space-y-6">
      <div className="group space-y-2">
        <label className="text-sm font-medium text-orange-200/80 ml-1 group-focus-within:text-orange-400 transition-colors">
          Recipient Address
        </label>
        <div className="relative">
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300 hover:bg-black/50 hover:border-white/20"
            placeholder="0x..."
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-white/20 group-focus-within:text-orange-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="group space-y-2">
        <div className="flex justify-between items-center ml-1">
          <label className="text-sm font-medium text-orange-200/80 group-focus-within:text-orange-400 transition-colors">
            Amount
          </label>
          {balance !== null && (
            <span className="text-xs text-orange-300/80 font-mono">
              Balance: {balance} MIDEN
            </span>
          )}
        </div>
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300 hover:bg-black/50 hover:border-white/20"
            placeholder="0.00"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <span className="text-sm font-bold text-white/20 group-focus-within:text-orange-500 transition-colors duration-300">
              MIDEN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
