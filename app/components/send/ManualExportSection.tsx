import React, { useState } from 'react';
import { useWallet } from "@demox-labs/miden-wallet-adapter";
import { Button } from "@/components/ui/Button";

export function ManualExportSection() {
  const { wallet } = useWallet();
  const [manualNoteId, setManualNoteId] = useState('');
  const [exportLoading, setExportLoading] = useState(false);

  const handleManualExport = async () => {
    if (!wallet || !manualNoteId) return;
    setExportLoading(true);
    try {
      const midenWallet = (wallet.adapter as any)._wallet || 
                          (window as any).midenWallet || 
                          (window as any).miden;
      if (!midenWallet || !midenWallet.exportNote) {
        throw new Error("Export capability not found in wallet");
      }
      
      const noteData = await midenWallet.exportNote(manualNoteId);
      if (noteData) {
        const blob = new Blob([JSON.stringify(noteData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `miden-note-${manualNoteId}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert("Note exported successfully!");
      } else {
        alert("Note data not found.");
      }
    } catch (e: any) {
      console.error("Export failed:", e);
      alert(`Export failed: ${e.message}`);
    } finally {
      setExportLoading(false);
    }
  };

  return (
    <div className="pt-8 border-t border-white/5">
      <details className="group">
        <summary className="flex items-center gap-2 text-xs font-medium text-white/30 cursor-pointer hover:text-white/50 transition-colors select-none">
          <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Troubleshooting: Manual Note Export
        </summary>
        <div className="mt-4 pl-6 animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="flex gap-3">
            <input
              type="text"
              value={manualNoteId}
              onChange={(e) => setManualNoteId(e.target.value)}
              className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-orange-500/50"
              placeholder="Paste Note ID here..."
            />
            <Button 
              onClick={handleManualExport}
              isLoading={exportLoading}
              variant="secondary"
              size="sm"
              disabled={!manualNoteId}
              className="text-xs h-9 px-4"
            >
              Export
            </Button>
          </div>
        </div>
      </details>
    </div>
  );
}
