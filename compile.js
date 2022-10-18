
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const ebayClonePath = path.resolve(__dirname, 'contracts', 'EbayClone.sol');
const source = fs.readFileSync(ebayClonePath, 'utf-8'); 

module.exports = solc.compile(source, 1).contracts[':EbayClone'];
//console.log(solc.compile(source, 1)); 
