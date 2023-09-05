require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    hardhat:{
      forking:{
        url:"https://eth-mainnet.g.alchemy.com/v2/WFi5mZksA_qYP_XDqaLQ8U6refMMc9Z8",
      }
    }
  }
};
