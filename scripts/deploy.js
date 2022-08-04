const hre = require("hardhat");
const { ethers } = require('hardhat');

async function main() {

  const provider = hre.ethers.provider;
  const signer = await provider.getSigner();

  const account = await signer.getAddress();
  console.log('account', account);
  console.log('Account balance', formatUnits(await provider.getBalance(account)));

  const SLABS = await hre.ethers.getContractFactory("SLABS");
  const sLabs = await SLABS.deploy("Starter LABS", "SLABS", 18);
  await sLabs.deployed();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
