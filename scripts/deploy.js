const hre = require("hardhat");

async function main() {
  const TokenBurda = await hre.ethers.getContractFactory("BurdaToken");
  const tokenBurda = await TokenBurda.deploy();
  await tokenBurda.deployed();

  console.log(`BurdaToken deployed ${tokenBurda.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
