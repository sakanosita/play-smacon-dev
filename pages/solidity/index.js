import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import ConnectHeader from '../../components/ConnectHeader'
import getEthBalance from '../../utils/getEthBalance'

let	provider;
let	signer;

export default function Home() {

	const [state, setState] = useState({
		account: null,
		ethBalance: '-',
		connectButton: false,
		hasMetaMask: true,
	});

	//const router = useRouter();

	useEffect(() => {
		
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");

		if (sessionStorage["SandboxMetaAlreadyConnected"])
			connectMeta();
		else
			setState({...state, connectButton: true});

		window.ethereum.on('accountsChanged', () => {
			connectMeta();
		});

		window.ethereum.on('chainChanged', () => {
			document.location.reload();
		});

	}, []);

	async function connectMeta() {
		if (!window.ethereum) {
			window.alert('You must install MetaMask to use this website');
			return;
		}

		let network = await provider.getNetwork();

		// if (network.chainId == 1) {
		// 	router.push('/');
		// 	return;
		// } else if (network.chainId  != 4) {
    if (network.chainId != 4) {
      window.alert('This website only supports Mainnet or Rinkeby testnet');
			return;
		}
		
		// Prompt user for account connections
		await provider.send("eth_requestAccounts", []);
		signer = provider.getSigner();
		sessionStorage["SandboxMetaAlreadyConnected"] = true;

		const [signerAddress] = await Promise.all([
													signer.getAddress(),
													]);
		
		const [signerBalance] = await Promise.all([
													getEthBalance(signerAddress, provider), 
													]);

		setState({
			...state,
			account: signerAddress,
			ethBalance: signerBalance,
			connectButton: false,
		});
		return;
	}

  return (
    <Layout>
      <Head>
        <title>Solidity</title>
      </Head>
      <h1 className="text-5xl">Solidity</h1>

      <Link href="/">
        <a>Back to home</a>
      </Link>
      <div>
        <div className="card card-bordered">
          <div className="card-body">
            <h2 className="card-title">First Application
            </h2> 
            <ConnectHeader
              account={state.account}
              connectButton={state.connectButton}
              hasMetaMask={state.hasMetaMask}
              connectMeta={connectMeta}
            />
            {state.ethBalance}
            <div className="justify-end card-actions">
              <button className="btn btn-secondary">inc</button>
            </div>
            <div className="justify-end card-actions">
              <button className="btn btn-secondary">dec</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
