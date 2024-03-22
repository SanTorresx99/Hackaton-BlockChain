const { ethers, run, network } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  const ContominioFactory = await ethers.getContractFactory("Condominio");
  console.log("deploing contract");
  const contominiio = await ContominioFactory.deploy();
  // // await simpleStorage.deployed()
  // const contracttAddress = await simpleStorage.getAddress()
  // console.log(`Deplode contract to: ${contracttAddress}`)
  // console.log(network.config)
  //
  // if (network.config.chainId === 11155111 && process.env.ETHERSCAN_TOKEN) {
  //   console.log('verifing')
  //   await simpleStorage.deploymentTransaction().wait(6)
  //   await verify(contracttAddress, [])
  //   console.log('verified')
  // }
  //
  // await simpleStorage.deploymentTransaction().wait(1)
  //
  // const currentValue = await simpleStorage.retrieve()
  // console.log(`currentValue is: ${currentValue}`)
  //
  // const transactionRes = await simpleStorage.store(99)
  // await transactionRes.wait(1)
  //
  // const updatedValue = await simpleStorage.retrieve()
  // console.log(`updatedValue is: ${updatedValue}`)
}

// async function verify(contracttAddress, args) {
//   console.log('verifying contract...')
//   try {
//     await run('verify:verify', {
//       address: contracttAddress,
//       constructorArguments: args,
//     })
//   } catch (err) {
//     if (err.message.toLowerCase().includes('already verified')) {
//       console.log('Contract already verified')
//     }
//     console.log(err)
//   }
// }

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
