import { useWallet } from '@demox-labs/miden-wallet-adapter';

export default function AssetsAndNotesComponent() {
  const { wallet, accountId, requestAssets, requestPrivateNotes } = useWallet();

  const getAssetsAndNotes = async () => {
    if (!wallet || !accountId) return;

    // { faucetId: string, amount: string }[]
    const assets = await requestAssets();

    // { noteId: string, noteType: NoteType, senderAccountId: string, assets: Asset[] }
    const notes = await requestPrivateNotes();

    return { assets, notes };
  };

  return (
    <button
      className="bg-blue-500 px-6 py-3 rounded-4xl"
      onClick={getAssetsAndNotes}
    >
      Get Assets and Notes
    </button>
  );
}