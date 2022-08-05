const hre = require("hardhat");
const { ethers } = require('hardhat');

async function main() {

  const formatUnits = function (number, units) {
    return ethers.utils.formatUnits(number, units || 8);
  }

  const provider = hre.ethers.provider;
  const signer = await provider.getSigner();

  const account = await signer.getAddress();
  console.log('account', account);
  console.log('Account balance', formatUnits(await provider.getBalance(account)));

  const SLABS = await hre.ethers.getContractFactory("SLABS");
  const sLabs = await SLABS.deploy("Starter LABS", "SLABS");
  await sLabs.deployed();

  const LABMONSTER = await hre.ethers.getContractFactory("LABMONSTER");
  const LabMonster = await LABMONSTER.deploy(1305, 'QmZWzAUMs8G7Bp9a1w8Kawu8UR71d5mipkyD9f49hsgHm3', '0x', 15)

  console.log("SLABS address", sLabs.address)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
