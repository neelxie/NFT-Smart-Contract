const { ethers } = require("ethers");

// Helper method for fetching env vars from the .env
const getEnvVariable = (key, defaultValue) => {
  if(process.env[key]) {
    return process.env[key];
  }
  if(!defaultValue) {
    throw `${key} is not defined and no default value was provided`;
  }
  return defaultValue;
}

// Helper method for fetching a connection provider to the Ethereum network
const getProvider = () => {
  return ethers.getDefaultProvider(getEnvVariable("NETWORK", "rinkeby"), {
    alchemy: getEnvVariable("ALCHEMY_KEY"),
  });
}

// Helper method for fetching a wallet account using an environment variable for the PK
const getAccount = () => {
  return new ethers.Wallet(getEnvVariable("ACCOUNT_PRIVATE_KEY"), getProvider());
}

module.exports = {
  getEnvVariable,
  getProvider,
  getAccount,
}