const { keccak256 } = require('ethereum-cryptography/keccak');
const { bytesToHex } = require('ethereum-cryptography/utils');

function hashedConcat(left, right) {
  if (!left) {
    throw new Error(
      'The concat function expects two hash arguments, the first was not receieved.'
    );
  }

  if (!right) {
    throw new Error(
      'The concat function expects two hash arguments, the second was not receieved.'
    );
  }

  return keccak256(Buffer.concat([left, right]));
}

function hashToHexString(hash) {
  return '0x' + bytesToHex(hash);
}

module.exports = { hashedConcat, hashToHexString, keccak256 };
