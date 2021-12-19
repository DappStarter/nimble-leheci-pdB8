require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan renew noble arrow gloom end army gauge'; 
let testAccounts = [
"0xb83a858e29d5479880634a0850302159a0efb27affb04a20c910a0f833d7f497",
"0x7595bdfae176fe3ce1dd4140a45e68ea751ea7398b6d5da042b03c9b50967182",
"0x49a0e03649af58ee62a20dee3fb952753ae96bd3495f9d8ddc30ff365acd7548",
"0x40efb0b748c842b930446018291628c53d2eacc4593efa81dc62fc8fd97067aa",
"0xe78e3559ca9a5fe70ab858e46ca653193456fda4bc6e401a14640db7f0f1bb14",
"0xcb33b5190da4b7670434c4bece25c42682cf10cb9d5cb3873359cf46807ac116",
"0x966ee1e1bece00b42914eb96b64236681ba32f639be21225da982bf5f5a7928e",
"0x70c57a1691f10599706eb244b303dd7a4990ec0f37cc4edafa7bd443b10e5402",
"0xf1841768dd5dbf706112eb5ff61dfd2384440f457824da003e42829ca38b61da",
"0x7a805122cd0a9dcfd0e1e6862683ffc0879a1cc9faf9de18da1dd5c23c669550"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


