const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

let accounts; 
let ebayclone;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  ebayclone = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode })
  .send({ from: accounts[0], gas: '1000000'})
});

describe('EbayClone', () => {
  it('deploys a ebayclone contract', () => {
    console.log(ebayclone);
    assert.ok(ebayclone.option.address);
  });
})

