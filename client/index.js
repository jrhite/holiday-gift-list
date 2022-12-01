const axios = require('axios');
const emails = require('./emails.json');

const serverUrl = 'http://localhost:1225';

async function main() {
  const index = 202; // TODO: some random num between 0 and 999, hard-coded for now

  const proof = getProof(index, leaves.map(Buffer.from).map(keccak256));

  const { data: gift } = await axios.get(`${serverUrl}/get-gift`, {
    params: {
      proof,
      node,
    },
  });

  console.log({ gift });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
