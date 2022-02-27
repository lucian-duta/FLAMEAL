var GoodsTransfer = artifacts.require("./GoodsTransfer.sol");

module.exports = function (deployer) {
  deployer.deploy(GoodsTransfer);
};
