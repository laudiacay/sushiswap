pragma solidity >=0.5.0;

interface ISushiswapV2Callee {
    function sushiswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
