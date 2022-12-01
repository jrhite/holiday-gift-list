const MerkleTree = require('./MerkleTree');
const emails = require('../client/emails.json');

const merkleTree = new MerkleTree(emails);

const root = merkleTree.getRoot();

console.log({ root });
