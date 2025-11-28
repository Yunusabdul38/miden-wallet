"use client"; // Add this if it's a client component (common for hooks in Next.js)

import { useWallet } from "@demox-labs/miden-wallet-adapter";

function AssetsAndNotesComponent() {
  const {
    wallet,
    address,
    requestAssets,
    requestPrivateNotes,
    requestConsumableNotes,
  } = useWallet();

  // This is what requestAssets() returns when you have 11 test tokens (from faucet)
  const assetsData = [
    {
      faucetId:
        "mid1qsg3qntylw62ttzvekh2rzteylpx6pd3lv7dlsh3rhapx0f5dlcs4vx5z0z",
      amount: "2500000000",
    },
  ];

  const notesData = [
    {
      noteId:
        "0x8f3a1c9e7d4b2f6a1c8d5e3f9b7d2a4c6e8f1a3b5c7d9e2f4a6c8e1b3d5f7a9c",
      noteType: 2,
      senderAccountId:
        "mid1qsg3qntylw62ttzvekh2rzteylpx6pd3lv7dlsh3rhapx0f5dlcs4vx5z0z",
      assets: [
        {
          faucetId:
            "mid1qsg3qntylw62ttzvekh2rzteylpx6pd3lv7dlsh3rhapx0f5dlcs4vx5z0z",
          amount: "1000000000",
        },
      ],
    },
  ];

  const getAssetsAndNotes = async () => {
    // This is what requestAssets() returns when you have 11 test tokens (from faucet)

    if (!wallet || !address) return;

    // { faucetId: string, amount: string }[]
    // const assets = await requestAssets(assetsData || undefined);
    const req = await requestConsumableNotes();

    // { noteId: string, noteType: NoteType, senderAccountId: string, assets: Asset[] }
    const notes = await requestPrivateNotes(notesData);

    return { req, notes };
  };

  const handleClick = async () => {
    try {
      const result = await getAssetsAndNotes();
      if (result) {
        console.log("Assets and Notes:", result); // For debugging; replace with your logic (e.g., update state)
      }
    } catch (error) {
      console.error("Error fetching assets and notes:", error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-amber-400 p-4 cursor-pointer mx-8"
    >
      Get Assets and Notes
    </button>
  );
}

export default AssetsAndNotesComponent; // Optional: Export if needed
