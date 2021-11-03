require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food north cruise muscle punch coral light army giggle'; 
let testAccounts = [
"0xe6e5106af68a56fe478ddb7cbfe72a427ccbe252e1aa4f23be69c82eef2b234e",
"0xba957b257edcb6dcfff834bb6c388d1b8bf2abb17e31ee25ce8b9dda0568a3ac",
"0xd04c1bf6bd4e25149f4c200bed69d5e2648dfde1fc9f14fd33b38884473ea083",
"0x26860dc6248468178b0f0c474165953dc0892d0cf922348bf0da971c0645424a",
"0x1601be2a2c3436c13a2f0055511210b1cb7832e08389a4fc2200070446e6a48c",
"0x4571c3b8d50665490b084b80cc523206a7e39360807ef9da2eb076ddb993ff67",
"0x9f11d369cfed1d1b6896989bf4cd2e6254f7339d1ca193db268e47bde28be07b",
"0x84cf13af2a482c875cef278678fd54bc41f6bf4b53cf9a3a036cd7ffea0661da",
"0x458ba7209b144b6432f0fa2acbefb58b0f708d6c0a1295b60fa77369cba252bb",
"0x0289c1a6b339835d70fbda6c8e4165604936e578c446dd2d615132f02d7f7a09"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

