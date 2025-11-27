"use client"
import {
  WalletProvider,
  WalletModalProvider,
  MidenWalletAdapter,
} from "@demox-labs/miden-wallet-adapter";

import "@demox-labs/miden-wallet-adapter/styles.css";

const wallets = [new MidenWalletAdapter({ appName: "Zcash hack" })];

export default function WalletConfig({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WalletProvider wallets={wallets}>
      <WalletModalProvider>
      {children}
      </WalletModalProvider>
    </WalletProvider>
  );
}
