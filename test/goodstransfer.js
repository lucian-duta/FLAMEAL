const GoodsTransfer = artifacts.require("./GoodsTransfer.sol");

contract("GoodsTransfer", (accounts) => {
  const reciever = accounts[3];

  it("Should make a transfer", async () => {
    const goodsTransferInstance = await GoodsTransfer.deployed();
    const initialData = await goodsTransferInstance.getAllTransactions();

    // Set value of 89
    await goodsTransferInstance.addToBlockchain(
      reciever,
      "{Name: ionel, Goods: 'branze', 'dasd'}",
      {
        from: accounts[8],
      }
    );

    // Get stored value
    const updatedData = await goodsTransferInstance.getAllTransactions();

    assert(initialData != updatedData, "the transfer should be done");
  });
});
