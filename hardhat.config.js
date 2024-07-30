require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["785df31fab3420773d9456ed6d10bbfb6699d40133d6bf3bdc23f17cbe141f0a"], //Your private key starting with "0x"
    },
  },
};