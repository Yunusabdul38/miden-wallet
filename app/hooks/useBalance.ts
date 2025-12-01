import { useState, useEffect } from 'react';
import { useWallet } from "@demox-labs/miden-wallet-adapter";

export function useBalance(faucetId: string) {
  const { connected, requestAssets } = useWallet();
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (connected && requestAssets) {
        try {
          const assets = await requestAssets();
          const targetAsset = assets.find((a: any) => a.faucetId === faucetId);
          if (targetAsset) {
            const rawBalance = Number(targetAsset.amount);
            const formattedBalance = (rawBalance / 1000000).toLocaleString(undefined, { 
              maximumFractionDigits: 6 
            });
            setBalance(formattedBalance);
          } else {
            setBalance('0');
          }
        } catch (err) {
          console.error("Error fetching balance:", err);
        }
      }
    };

    fetchBalance();
  }, [connected, requestAssets, faucetId]);

  return balance;
}
