import { useState } from 'react';
import { useWallet, SendTransaction } from "@demox-labs/miden-wallet-adapter";
import { getUnderlyingWallet } from './transactionUtils';
import { handlePrivateTransaction } from './privateTransactionHandler';

type StatusType = { type: 'success' | 'error' | 'info', message: string } | null;

export function useSendTransaction(faucetId: string, isPrivate: boolean) {
  const { wallet, address } = useWallet();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<StatusType>(null);

  const handleSend = async (recipient: string, amount: string) => {
    if (!wallet || !address) return;
    setLoading(true);
    setStatus(null);

    try {
      const rawAmount = Math.floor(Number(amount) * 1000000);
      console.log(`Sending ${amount} tokens (${rawAmount} units) to ${recipient}`);

      const transaction = new SendTransaction(
        address,
        recipient,
        faucetId,
        isPrivate ? 'private' : 'public',
        rawAmount
      );

      const underlyingWallet = getUnderlyingWallet(wallet);
      
      let result;
      if (isPrivate) {
        if (!underlyingWallet) {
          throw new Error("Could not access Miden Wallet instance for private transaction");
        }
        console.log("Sending private transaction via underlying wallet...");
        result = await underlyingWallet.requestSend(transaction);
      } else {
        console.log("Sending public transaction via adapter...");
        result = await (wallet.adapter as any).requestSend(transaction);
      }

      console.log("Transaction Result:", result);

      if (isPrivate) {
        await handlePrivateTransaction(result, underlyingWallet, setStatus);
      } else {
        setStatus({ type: 'success', message: 'Transaction sent successfully!' });
      }
    } catch (error: any) {
      console.error("Send error:", error);
      setStatus({ type: 'error', message: `Transaction failed: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  return { handleSend, loading, status };
}
