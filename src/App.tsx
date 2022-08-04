import './App.css';
import styles from './custom.module.css';
import { FaTwitterSquare, FaDiscord } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PreviousImage from './Components/PreviousImage'
import MONSTER from './assets/monster-3.png'
import { ReactComponent as Opensea } from './assets/opensea.svg'

let web3Modal;
if (typeof window !== "undefined") {
  console.log(1)
}
const App = () => {
  const [myAddress, setMyaddress] = useState('');
  const [walletStatus, setWalletStatus] = useState(false);

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
                <button>CONNECT WALLET</button>
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
