const { hashedConcat } = require('./hashUtils');

function verifyProof(proof, leaf, root, concat = hashedConcat) {
  let data = leaf;

  for (let i = 0; i < proof.length; i++) {
    if (proof[i].left) {
      data = concat(proof[i].data, data);
    } else {
      data = concat(data, proof[i].data);
    }
  }

  return data === root;
}

module.exports = verifyProof;
