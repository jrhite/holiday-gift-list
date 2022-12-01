const express = require('express');
const bodyParser = require('body-parser');

const port = 1225;

const app = express();
app.use(bodyParser.json());


// TODO: hard-code root here
const merkleRoot = '0x....';

// params
app.get('/get-gift', (req, res) => {
  // generate root from proof
  // compare generated root to hardcoded root

});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
