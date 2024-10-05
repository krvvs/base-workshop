'use client';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Avatar,
  Identity,
  Name,
  Badge,
  Address,
} from '@coinbase/onchainkit/identity';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <div>
        <h2>Account</h2>
        <Identity
          address='0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9'
          schemaId='0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9'
        >
          <Avatar />
          <Name>
            <Badge />
          </Name>
          <Address />
        </Identity>
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button
            type='button'
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        )}
      </div>

      {/* <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type='button'
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div> */}

      <Wallet>
        <ConnectWallet>
          <Avatar />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity>
            <Avatar />
            <Name />
            <Address />
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </>
  );
}

export default App;
