const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'please kindly insert your own twelve word memnonic from MetaMask',
  'https://rinkeby.infura.io/<as sent by infura to your email>'
);

const web3 = new Web3(provider); 

const deploy = async () => {
  accounts = await web3.eth.getAccounts();

  console.log('attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: '0x' + bytecode })
  .send({ from: accounts[0],  gas: '1000000' });

  console.log(interface);
  console.log('Contract deployed to', result.options.address);
};

deploy();