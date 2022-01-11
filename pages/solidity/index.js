import Head from 'next/head'
import Link from 'next/link'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import getEthBalance from '../../utils/getEthBalance'
import Layout from '../../components/layout'
import ConnectHeader from '../../components/ConnectHeader'

let	provider;
let	signer;
const contractAddress = "0x1394FaF1D49f7F922c731B9154e61B57d8659bdE";
const abi = [
  {
    "inputs": [],
    "name": "count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dec",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "inc",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export default function Home() {
  
	const [state, setState] = useState({
		account: null,
		ethBalance: '-',
		connectButton: true,
		hasMetaMask: true,
    contractState: '-',
	});
	//const router = useRouter();

	useEffect(() => {
		if (!window.ethereum) {
			window.alert('You must install MetaMask to use this website');
			setState({...state, hasMetaMask: false});
			return;
		}
		
    	provider = new ethers.providers.Web3Provider(window.ethereum, "any");

		if (sessionStorage["SandboxMetaAlreadyConnected"])
			connectMeta();
		else
			setState({...state, connectButton: true});

		window.ethereum.on('accountsChanged', () => {
			connectMeta();
		});

		window.ethereum.on('chainChanged', () => {
			// document.location.reload();
      connectMeta();
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
  async function clickGet() {
    let contract = new ethers.Contract(contractAddress, abi, provider);
    let contractState = await contract.get();
    setState({
      ...state,
      contractState: contractState.toNumber()
    })
  }
  async function clickInc() {
    let contract = new ethers.Contract(contractAddress, abi, provider);
    const contractSigner = contract.connect(signer);
    let tx = await contractSigner.inc();

  }
  async function clickDec() {
    let contract = new ethers.Contract(contractAddress, abi, provider);
    const contractSigner = contract.connect(signer);
    let tx = await contractSigner.dec();
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
            <div class="stat">
              <div class="text-lg">{state.ethBalance}</div> 
            </div>
            
            <div class="w-full shadow stats">
            <div class="stat">
              <div class="stat-figure text-2xl">{state.contractState}</div> 
            </div>
            </div>
            <Link href={"https://rinkeby.etherscan.io/address/" + contractAddress}>
              <a target="_blank">Etherscan</a>
            </Link>
            <div className="justify-end card-actions">
              <button
                onClick={clickGet} 
                className="btn btn-secondary">
                Get
              </button>
              <button
                onClick={clickInc} 
                className="btn btn-secondary">
                Inc
              </button>
              <button
                onClick={clickDec}
                className="btn btn-secondary">
                Dec
              </button>
            </div>
            <div className="justify-end card-actions">

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
