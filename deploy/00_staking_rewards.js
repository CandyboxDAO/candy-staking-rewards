module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const freeERC20 = await deploy("FreeERC20", {
    from: deployer,
    args: ["FREE", "FREE"],
    log: true,
  });

  const freeERC20LPToken = await deploy("FreeERC20", {
    from: deployer,
    args: ["FREE Juice LP TOKEN", "jFREE"],
    log: true,
  });  

  await deploy('StakingRewards', {
    from: deployer,
    args: [deployer, deployer, freeERC20, freeERC20LPToken],
    log: true,
  });
};
module.exports.tags = ["StakingRewards"];
