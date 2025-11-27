"use client";
import {
  WalletConnectButton,
  WalletModalButton,
  WalletMultiButton,
} from "@demox-labs/miden-wallet-adapter";
import SendComponent from "./send";
import AssetsAndNotesComponent from "./assetnote";
export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
    </main>
  );
}

function Header() {
  return (
    <header>
      <h1>My Miden dApp</h1>
      {/* <WalletConnectButton />
      <WalletModalButton /> */}
      <WalletMultiButton />

      <div className="my-14 grid gap-5">
        <SendComponent />
        <AssetsAndNotesComponent />
      </div>
    </header>
  );
}
