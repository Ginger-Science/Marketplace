import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployGinger: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const result = await deploy("Ginger", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  const contract = await ethers.getContractAt("Ginger", result.address);
  const currentOwner = await contract.owner();

  const TARGET_OWNER = "0x6EDc457f2E9675fe02E9671b6CDc6a8B24e0aa1F";

  if (currentOwner.toLowerCase() !== TARGET_OWNER.toLowerCase()) {
    const tx = await contract.transferOwnership(TARGET_OWNER);
    await tx.wait();
    console.log(`Ownership transferred to ${TARGET_OWNER}`);
  } else {
    console.log("Already owned by target wallet.");
  }
};

export default deployGinger;
deployGinger.tags = ["Ginger"];
