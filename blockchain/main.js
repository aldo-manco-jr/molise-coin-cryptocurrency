
const {Blockchain, Transaction} = require('./blockchain');

const EC = require('elliptic').ec;
const cryptoAlgorithm = new EC('secp256k1');

// Public Key:  04c9030c10160458880ddc0d291026473cfc56c15a3c2775d1567c395ef06dfb2a5c96b7a857ac530cbfa859f028d43bfb704d01cfcec6e44a694c7a1159e73859
// Private Key:  ad724de8f5f9094761999d4d8c0bb847012e0713d31cb081a7ea5aa8266714eb

const myKey = cryptoAlgorithm.keyFromPrivate('ad724de8f5f9094761999d4d8c0bb847012e0713d31cb081a7ea5aa8266714eb');
const myWalletAddress = myKey.getPublic('hex');

let moliseCoin = new Blockchain();

const transaction_1 = new Transaction(myWalletAddress, 'receiver_address', 20);
transaction_1.signTransaction(myKey);
moliseCoin.addTransaction(transaction_1);

console.log('mining block 1...');
moliseCoin.minePendingTransactions(myWalletAddress);

console.log("\naldo's balance: ", moliseCoin.getBalanceOfAddress(myWalletAddress));

console.log('\nmining block 2...');
moliseCoin.minePendingTransactions('aldo-portfolio');

console.log("\naldo's balance: ", moliseCoin.getBalanceOfAddress(myWalletAddress));

//moliseCoin.chain[1].transactions[0].amount = 2;

console.log('Is blockchain valid? ', moliseCoin.isChainValid());