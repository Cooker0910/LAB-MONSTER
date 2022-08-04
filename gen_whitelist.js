const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

let whitelistAddresses = [
  "0x138532955EE01A5DAf9800aa57a6Ae2cDD81d572",
  "0x68e64e74841f761CF6f1181Ae522C09ab0f6Cd6F",
  "0xBb5e1180704CC98BD718c5B13cA02740f3C967A3"
]

const main = async() => {
  const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const but2hex = z => '0x' + z.toString('hex');
  console.log(merkleTree.getHexRoot());
  
  const claimAddress = leafNodes[2];
  console.log(but2hex(claimAddress))
  
  const hexProof = merkleTree.getHexProof(claimAddress);
  console.log(hexProof)
  
  const leaf = keccak256("0xBb5e1180704CC98BD718c5B13cA02740f3C967A3")
  console.log(leaf)
  
  console.log(await contract.verify.call(root, leaf, hexProof)) // true
}

main()