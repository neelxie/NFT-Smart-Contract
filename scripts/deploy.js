// async function main() {
//   // Get our account (as deployer) to verify that a minimum wallet  balance
//   // is available.

//   const [deployer] = await ethers.getSigners();

//   console.log(`Deploying contracts with the account: ${deployer.address}`);
//   console.log(`Account balance: ${(await deployer.getBalance()).toString()}`);

//   // Fetch the compiled contract using ethers.js
//   const NFT = await ethers.getContractFactory("NFT");
//   // call deploy() will return an async promise that we can await on
//   const nft = await NFT.deploy();
//   // Print the address of the contract
//   console.log(`NFT contract deployed at: ${nft.address}`);
// }
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

const { task } = require('hardhat/config');
const { getAccount } = require("./helpers");

task("check-balance", "Prints out the balance of your account").setAction(async function(taskArguments, hre){
  const account = getAccount();
  console.log(`Account balance for: ${account.address}: ${await account.getBalance()}`);
}
);

task("deploy", "Deploys the NFT.sol contract").setAction(async function(taskArguments, hre){

