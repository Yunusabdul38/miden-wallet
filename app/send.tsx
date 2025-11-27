import { useWallet, SendTransaction } from "@demox-labs/miden-wallet-adapter";

export default function SendComponent() {
  const { wallet, address, connected } = useWallet();

  console.log(wallet, address, connected);

  const handleSend = async () => {
    if (!wallet || !address) return;

    const transaction = new SendTransaction(
      address,
      "mtst1aqmy077tpm3aqypr4vmgn6fe8yk4duud_qruqqypuyph",
      "faucet_id_here",
      "private", // or 'private'
      100000000 // amount
    );

    try {
      // Use the correct method to send the transaction
      await wallet.adapter.sendTransaction(transaction);
      console.log("Transaction sent successfully!");
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  if (!connected) {
    return <p>Please connect your wallet</p>;
  }

  return (
    <div className="py-20 px-10 flex-col gap-10 flex">
      <p className="text-3xl font-semibold">
        Connected: <span className="text-base">{address}</span>
      </p>
      <button
        className="bg-blue-500 px-6 py-3 rounded-4xl"
        onClick={handleSend}
      >
        Send Transaction
      </button>
    </div>
  );
}
