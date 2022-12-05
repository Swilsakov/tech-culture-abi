require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox");

const words = process.env.WORDS

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s3.binance.org:8545",
      chainId: 97,
      accounts: {
        mnemonic: words,
      }
    }
  }
};
