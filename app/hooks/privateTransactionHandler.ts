import { downloadNote, pollForTransaction, getUnderlyingWallet } from './transactionUtils';

export const handlePrivateTransaction = async (
  result: any, 
  midenWallet: any,
  setStatus: (status: { type: 'success' | 'error' | 'info', message: string }) => void
) => {
  let noteData = result?.note || result?.noteBytes;
  let noteId = result?.noteId || result?.outputNotes?.[0]?.id;

  if (!noteData && result?.transactionId) {
    console.log("Fetching transaction details for ID:", result.transactionId);
    setStatus({ 
      type: 'info', 
      message: 'Transaction sent. Searching for note (this may take 20s)...' 
    });
    
    if (midenWallet?.getTransactions) {
      noteId = await pollForTransaction(result.transactionId, midenWallet);
    }
  }

  if (!noteData && noteId && midenWallet?.exportNote) {
    console.log("Attempting to export note:", noteId);
    noteData = await midenWallet.exportNote(noteId);
  }

  if (noteData) {
    downloadNote(noteData, noteId);
    setStatus({ type: 'success', message: 'Transaction sent! Note data downloaded.' });
  } else {
    const resultKeys = result && typeof result === 'object' 
      ? Object.keys(result).join(', ') 
      : String(result);
    setStatus({ 
      type: 'success', 
      message: `Transaction sent. Note: Could not auto-download. Result keys: [${resultKeys}]. Please check your wallet for the Note ID and use Manual Export below.` 
    });
  }
};
