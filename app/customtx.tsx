import { useWallet, CustomTransaction } from "@demox-labs/miden-wallet-adapter";

function CustomTransactionComponent() {
  const { wallet, accountId, requestTransaction } = useWallet();

  const handleCustomTransaction = async () => {
    if (!wallet || !accountId) return;

    const customTransaction = new CustomTransaction(
      accountId,
      transactionRequest // TransactionRequest from Miden Web SDK
    );

    await requestTransaction(customTransaction);
  };

  return (
    <button onClick={handleCustomTransaction}>
      Execute Custom Transaction
    </button>
  );
}
