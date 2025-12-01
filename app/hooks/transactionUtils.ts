export const downloadNote = (noteData: any, noteId?: string) => {
  const blob = new Blob([JSON.stringify(noteData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `miden-note-${noteId || Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const pollForTransaction = async (transactionId: string, midenWallet: any) => {
  for (let i = 0; i < 10; i++) {
    try {
      console.log(`Polling for transaction (Attempt ${i + 1}/10)...`);
      const transactions = await midenWallet.getTransactions();
      const tx = transactions.find((t: any) => 
        t.id === transactionId || t.id?.toString() === transactionId
      );
      
      if (tx?.outputNotes?.[0]?.id) {
        console.log("Found note ID from transaction history:", tx.outputNotes[0].id);
        return tx.outputNotes[0].id;
      }
    } catch (err) {
      console.error("Error fetching transaction history:", err);
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  return null;
};

export const getUnderlyingWallet = (wallet: any) => {
  return (wallet.adapter as any)._wallet || 
         (window as any).midenWallet || 
         (window as any).miden;
};
