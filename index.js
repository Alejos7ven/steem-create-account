const dsteem = require('dsteem');
let opts = {};
//connect to production server
opts.addressPrefix = 'STM';
opts.chainId =
    '0000000000000000000000000000000000000000000000000000000000000000';
//connect to server which is connected to the network/production
const client = new dsteem.Client('https://api.steemit.com');
let creator = '';
let privateKey = dsteem.PrivateKey.fromString('');
let ops = [];

const claim_op = [
    'claim_account',
    {
        creator: creator,
        fee: '0.000 STEEM',
        extensions: [],
    }
];
ops.push(claim_op) 
client.broadcast.sendOperations(ops, privateKey).then(
    function(result) {
        console.log(result);
    },
    function(error) {
        console.error(error);
    }
);