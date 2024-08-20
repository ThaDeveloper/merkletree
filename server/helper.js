const MerkleTree = require("../utils/MerkleTree");
const niceList = require("../utils/niceList");
const verifyProof = require("../utils/verifyProof");


const giftVerified = (name) => {
    // create the merkle tree for the whole nice list
    const merkleTree = new MerkleTree(niceList);

    // get the root
    const root = merkleTree.getRoot();

    // find the proof that name provided block is in the list
    const index = niceList.findIndex(n => n === name);
    const proof = merkleTree.getProof(index);

   return verifyProof(proof, name, root);
}
module.exports = giftVerified;