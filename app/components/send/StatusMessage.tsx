import React from 'react';

type StatusType = { type: 'success' | 'error' | 'info', message: string };

interface StatusMessageProps {
  status: StatusType;
}

export function StatusMessage({ status }: StatusMessageProps) {
  return (
    <div className={`p-4 rounded-xl text-sm animate-in fade-in slide-in-from-top-2 duration-300 ${
      status.type === 'success' ? 'bg-green-500/10 text-green-200 border border-green-500/20' : 
      status.type === 'info' ? 'bg-blue-500/10 text-blue-200 border border-blue-500/20' :
      'bg-red-500/10 text-red-200 border border-red-500/20'
    }`}>
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 w-2 h-2 rounded-full ${
          status.type === 'success' ? 'bg-green-400' : 
          status.type === 'info' ? 'bg-blue-400' :
          'bg-red-400'
        }`} />
        {status.message}
      </div>
    </div>
  );
}
