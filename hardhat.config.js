require("hardhat-deploy");
require("hardhat-deploy-ethers");

const fs = require("fs");

const defaultNetwork = "rinkeby";

function mnemonic() {
  try {
    return fs.readFileSync("./mnemonic.txt").toString().trim();
  } catch (e) {
    console.log("Couldn't read mnemonic", e);
  }
  return "";
}

module.exports = {
    defaultNetwork,

    networks: {
      hardhat: {
        chainId: 1337,
      },
      localhost: {
        url: "http://localhost:8545",
      },
      kovan: {
        url: `https://kovan.infura.io/v3/${process.env.INFURA_ID}`,
        accounts: {
          mnemonic: mnemonic(),
        },
      },
      rinkeby: {
        url: `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,
        accounts: {
          mnemonic: mnemonic(),
        },
      },
      mainnet: {
        url: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
        accounts: {
          mnemonic: mnemonic(),
        },
      },
    },
    solidity: {
      compilers: [
        {
          version: "0.8.7",
          settings: {
            optimizer: {
              enabled: true,
              runs: 200,
            },
          },
        },
      ],
    },
    etherscan: {
      apiKey: `${process.env.ETHERSCAN_API_KEY}`,
    },
  };