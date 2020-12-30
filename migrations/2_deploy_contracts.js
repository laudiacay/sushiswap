const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const UniswapV2Pair = artifacts.require("UniswapV2Pair");
const UniswapV2Router02 = artifacts.require("UniswapV2Router02");
const DAI = artifacts.require("DAI");
const USDC = artifacts.require("USDC");
const TetherToken = artifacts.require("TetherToken");
const WrappedBitcoin = artifacts.require("WrappedBitcoin");
const WrappedEthereum = artifacts.require("WrappedEthereum");

module.exports = async (deployer, network, accounts) => {
    // GRAB A FUCKTON OF TOKENS
    console.log("Initiate the Token Cannon...");
    /*dai = await DAI.at();
    usdc = await USDC.at();
    usdt = await TetherToken.at();
    wbtc = await WrappedBitcoin.at();
    weth = await WrappedEthereum.at();*/



    console.log("Deploying the Sushiswap Factory...");
    await deployer.deploy(UniswapV2Factory, "0xf942dba4159cb61f8ad88ca4a83f5204e8f4a6bd");
    console.log("Deployed the Sushiswap Factory...");
    const sushiFactory = await UniswapV2Factory.deployed();

    console.log("Deploying the SushiSwap Router...");
    await deployer.deploy(
        UniswapV2Router02,
        sushiFactory.address,
        weth.address
    );
    console.log("SushiSwap Router Deployed");
    const sushiRouter = await UniswapV2Router02.deployed();


      const usdcDecimals = parseBigNumber(await usdc.decimals());
  const usdtDecimals = parseBigNumber(await usdt.decimals());
  const daiDecimals = parseBigNumber(await dai.decimals());
  const wbtcDecimals = parseBigNumber(await wbtc.decimals());
  const wethDecimals = parseBigNumber(await weth.decimals());

  const largeAmount = (new BigNumber(2)).pow(255);
  const largeAmountWithDecimals = largeAmount.toString();
  const deadline = 100000000000000;

  /* Approve the router to send accounts[0]'s tokens */
  await usdc.approve(uniswapRouter.address, largeAmountWithDecimals);
  await wbtc.approve(uniswapRouter.address, largeAmountWithDecimals);
  await dai.approve(uniswapRouter.address, largeAmountWithDecimals);
  await usdt.approve(uniswapRouter.address, largeAmountWithDecimals);
  await weth.approve(uniswapRouter.address, largeAmountWithDecimals);



  /* USDC - wBTC */
  console.log("Listing USDC-wBTC");
  await uniswapFactory.createPair(usdc.address, wbtc.address);
  const USDC_wBTC = await uniswapFactory.getPair(usdc.address, wbtc.address);
  console.log("USDC-wBTC pair created");
  console.log(USDC_wBTC);
  const pair2 = await UniswapV2Pair.at(USDC_wBTC);
  await pair2.sync();
  console.log("Listed USDC-wBTC");


  /* USDC - DAI */
  console.log("Listing USDC-DAI");
  await uniswapFactory.createPair(usdc.address, dai.address);
  const USDC_DAI = await uniswapFactory.getPair(usdc.address, dai.address);
  console.log("USDC-DAI pair created");
  console.log(USDC_DAI);
  const pair3 = await UniswapV2Pair.at(USDC_DAI);
  await pair3.sync();
  console.log("Listed USDC-DAI");


  /* USDC - USDT */
  console.log("Listing USDC-USDT");
  await uniswapFactory.createPair(usdc.address, usdt.address);
  const USDC_USDT = await uniswapFactory.getPair(usdc.address, usdt.address);
  console.log("USDC-USDT pair created");
  console.log(USDC_USDT);
  const pair4 = await UniswapV2Pair.at(USDC_USDT);
  await pair4.sync();
  console.log("Listed USDC-USDT");


  /* USDC - wETH */
  console.log("Listing USDC-wETH");
  await uniswapFactory.createPair(usdc.address, weth.address);
  const USDC_wETH = await uniswapFactory.getPair(usdc.address, weth.address);
  console.log("USDC-wETH pair created");
  console.log(USDC_wETH);
  const pair1 = await UniswapV2Pair.at(USDC_wETH);
  await pair1.sync();
  console.log("Listed USDC-wETH");


  /* ETH - wBTC */
  console.log("Listing ETH-wBTC");
  await uniswapFactory.createPair(weth.address, wbtc.address);
  const ETH_wBTC = await uniswapFactory.getPair(
    weth.address,
    wbtc.address
  );
  console.log("ETH-wBTC pair created");
  console.log(ETH_wBTC);
  const pair5 = await UniswapV2Pair.at(ETH_wBTC);
  await pair5.sync();
  console.log("Listed ETH-wBTC");

  
  /* ETH - USDT */
  console.log("Listing ETH-USDT");
  await uniswapFactory.createPair(weth.address, usdt.address);
  const ETH_USDT = await uniswapFactory.getPair(
    weth.address,
    usdt.address
  );
  console.log("ETH-USDT pair created");
  console.log(ETH_USDT);
  const pair6 = await UniswapV2Pair.at(ETH_USDT);
  await pair6.sync();
  console.log("Listed ETH-USDT");

  /* ETH-DAI */
  console.log("Listing ETH-DAI");
  await uniswapFactory.createPair(weth.address, dai.address);
  const ETH_DAI = await uniswapFactory.getPair(weth.address, dai.address);
  console.log("ETH-DAI pair created");
  console.log(ETH_DAI);
  const pair7 = await UniswapV2Pair.at(ETH_DAI);
  await pair7.sync();
  console.log("Listed ETH-DAI");

  /* Finished listing Pairs */

  /* give USDC-XXX pairs some reserves */
  const baseLiquidity = 100000;
  await uniswapRouter.addLiquidity(
    usdc.address,
    dai.address,
    amountWithDecimals(baseLiquidity, usdcDecimals),
    amountWithDecimals(baseLiquidity, daiDecimals), 
    "0",
    "0",
    accounts[0],
    deadline
  );
  await uniswapRouter.addLiquidity(
    usdc.address,
    usdt.address,
    amountWithDecimals(baseLiquidity, usdcDecimals),
    amountWithDecimals(baseLiquidity, usdtDecimals), 
    "0",
    "0",
    accounts[0],
    deadline
  );
  await uniswapRouter.addLiquidity(
    usdc.address,
    wbtc.address,
    amountWithDecimals(baseLiquidity, usdcDecimals),
    amountWithDecimals(baseLiquidity * 35 * 400, wbtcDecimals), 
    "0",
    "0",
    accounts[0],
    deadline
  );
  await uniswapRouter.addLiquidity(
    usdc.address,
    weth.address,
    amountWithDecimals(baseLiquidity, usdcDecimals),
    amountWithDecimals(baseLiquidity * 400, wethDecimals), 
    "0",
    "0",
    accounts[0],
    deadline
  );


  /* Give our testers some tokens */
  const testTokenAmount = 1000;
  for (const tester of testerAddresses) {
    console.log(`Giving ${tester} some LP tokens`);
    await uniswapRouter.addLiquidity(
      usdc.address,
      weth.address,
      amountWithDecimals(400 * testTokenAmount, usdcDecimals), //$400 USDC
      amountWithDecimals(1 * testTokenAmount, wethDecimals), // 1 ETH
      "0", //$300 USDC
      "0", // 0.9 ETH
      tester,
      deadline
    );
    await uniswapRouter.addLiquidity(
      weth.address,
      wbtc.address,
      amountWithDecimals(35 * testTokenAmount, wethDecimals), //35 eth
      amountWithDecimals(1 * testTokenAmount, wbtcDecimals), //one btc
      "0",
      "0",
      tester,
      deadline
    );
    await uniswapRouter.addLiquidity(
      usdt.address,
      weth.address,
      amountWithDecimals(400 * testTokenAmount, usdtDecimals), //$400 USDT
      amountWithDecimals(1 * testTokenAmount, wethDecimals), // 1 ETH
      "0",
      "0",
      tester,
      deadline
    );
    await uniswapRouter.addLiquidity(
      dai.address,
      weth.address,
      amountWithDecimals(400 * testTokenAmount, daiDecimals), //$400 DAI
      amountWithDecimals(1 * testTokenAmount, wethDecimals), // 1 ETH
      "0",
      "0",
      tester,
      deadline
    );
  }

  if (network == "development") {
    console.log("REACT_APP_LOCALHOST_SUSHI_ETH_DAI=" + ETH_DAI);
    console.log("REACT_APP_LOCALHOST_SUSHI_ETH_USDT=" + ETH_USDT);
    console.log("REACT_APP_LOCALHOST_SUSHI_ETH_USDC=" + USDC_wETH);
    console.log("REACT_APP_LOCALHOST_SUSHI_ETH_WBTC=" + ETH_wBTC);
  } else if (network.search("kovan") >= 0) {
    console.log("kovan SUSHI_ETH_DAI = " + ETH_DAI);
    console.log("kovan SUSHI_ETH_USDT = " + ETH_USDT);
    console.log("kovan SUSHI_ETH_USDC = " + USDC_wETH);
    console.log("kovan SUSHI_ETH_WBTC = " + ETH_wBTC);
  }

};
