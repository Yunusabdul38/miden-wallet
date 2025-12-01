"use client";
import React, { useState } from 'react';
import { useWallet } from "@demox-labs/miden-wallet-adapter";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useBalance } from "./hooks/useBalance";
import { useSendTransaction } from "./hooks/useSendTransaction";
import { StatusMessage } from "./components/send/StatusMessage";
import { TransactionForm } from "./components/send/TransactionForm";
import { PrivateTransferToggle } from "./components/send/PrivateTransferToggle";
import { ManualExportSection } from "./components/send/ManualExportSection";
import { WalletLockedState } from "./components/send/WalletLockedState";

export default function SendComponent() {
  const { connected } = useWallet();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [faucetId] = useState('mtst1ap2t7nsjausqsgrswk9syfzkcu328yna');
  const [isPrivate, setIsPrivate] = useState(false);

  const balance = useBalance(faucetId);
  const { handleSend, loading, status } = useSendTransaction(faucetId, isPrivate);

  if (!connected) {
    return <WalletLockedState />;
  }

  return (
    <Card 
      title="Send Tokens" 
      className="animate-in fade-in slide-in-from-bottom-4 duration-700 border-orange-500/20 shadow-2xl shadow-orange-500/10"
    >
      <div className="space-y-8">
        {status && <StatusMessage status={status} />}

        <div className="space-y-6">
          <TransactionForm
            recipient={recipient}
            setRecipient={setRecipient}
            amount={amount}
            setAmount={setAmount}
            balance={balance}
          />

          <PrivateTransferToggle
            isPrivate={isPrivate}
            setIsPrivate={setIsPrivate}
          />
        </div>

        <div className="pt-4">
          <Button 
            onClick={() => handleSend(recipient, amount)} 
            isLoading={loading}
            className="w-full h-14 text-lg font-medium shadow-xl shadow-orange-900/20 hover:shadow-orange-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            variant="primary"
            size="lg"
          >
            {isPrivate ? 'Send Private Note' : 'Send Tokens'}
          </Button>
        </div>

        <ManualExportSection />
      </div>
    </Card>
  );
}
