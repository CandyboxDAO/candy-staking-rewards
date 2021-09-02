const chalk = require("chalk");

/**
 * Deploys the Staking Rewards contract(s).
 *
 * Example usage:
 * npx hardhat deploy \
 *   --network rinkeby
 */
task(
  "deploy",
  "Deploys the Staking Rewards contract(s)"
)
  .setAction(async (taskArgs) => {
    // TODO
    console.log('deploying...')
  });