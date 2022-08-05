import './App.css';
import { useEffect, useState } from "react";
import { FaTwitterSquare } from 'react-icons/fa';
import styles from './custom.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PreviousImage from './Components/PreviousImage'
import MONSTER from './assets/monster-3.png'
import { ReactComponent as Opensea } from './assets/opensea.svg'
import Web3 from 'web3';

const App = () => {

  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
  const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);

  useEffect(() => {
    if((window as any).ethereum){
      //check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
    }
  },[])

  
  const customWeb3 = new Web3(new Web3.providers.HttpProvider('https://rpc-mumbai.maticvigil.com'));
  
  async function connectMetamaskWallet(): Promise<void> {
    //to get around type checking
    (window as any).ethereum
    .request({
      method: "eth_requestAccounts",
    })
    .then((accounts : string[]) => {
        console.log('account', (window as any).ethereum.networkVersion)
        setEthereumAccount(accounts[0]);
        // if((window as any).ethereum.networkVersion != 80001) changeNetwork();
      })
      .catch((error: any) => {
          alert(`Something went wrong: ${error}`);
      });
  }

  // const chainId = 8001

  // const changeNetwork = async() => {
  //   try {
  //     await (window as any).ethereum.request({
  //       method: 'wallet_switchEthereumChain',
  //       params: [{ chainId: customWeb3.utils.toHex(chainId) }]
  //     });
  //   } catch (err) {
  //       // This error code indicates that the chain has not been added to MetaMask
  //     if (err.code === 4902) {
  //       await (window as any).ethereum.request({
  //         method: 'wallet_addEthereumChain',
  //         params: [
  //           {
  //             chainName: 'Mumbai',
  //             chainId: customWeb3.utils.toHex(chainId),
  //             nativeCurrency: { name: 'tMATIC', decimals: 18, symbol: 'tMATIC' },
  //             rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
  //             blockExplorerUrls: ['https://mumbai.polygonscan.com/']
  //           },
  //         ]
  //       });
  //     }
  //   }
  // }

  return (
    <div style={{ background: "linear-gradient(135deg, #8bfccd, #c5b0fb)"}}>
      <div className={styles.header}>
        </div>
      <div className={styles.container}>
        <div className={styles.bear}>
          <PreviousImage
            src={MONSTER}
            alt=""
            placeholder="GIF"
            errorImage=""
            className=""
          />
        </div>
        <div className={`d-flex flex-column ${styles.rightpan}`}>
          <h1 className={styles.title}>LAB MONSTER</h1>
          <div className={`px-lg-5 ${styles.text}`}>Lab Monsters created by Starter Labs</div>
          <div className="d-flex justify-content-center">
            <div className={styles.mainButton}>
            {
              isMetamaskInstalled ? (
                <button onClick={connectMetamaskWallet}>CONNECT WALLET</button>
                ) : (
                <button>Install Metamask</button>
              )
            }
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <a href='#' target='_blank'>
          <FaTwitterSquare className={styles.socialTwitter} />
        </a>
        <a href='#'>
          <Opensea className={styles.opensea} style={{ color: "linear-gradient(135deg, #8bfccd, #c5b0fb)"}} />
        </a>
      </div>
    </div>
  );
}

export default App;
