import { fetchData } from "./getData";

/**
 *
 * @param {String} addressIn the address of the receiver
 * @param {String} contentIn the content of the transaction (the goods)
 * @returns {object | null} the transaction error object or null if the transaction was successful
 */
const SendData = (addressIn, contentIn) => {
  const address = addressIn;
  const content = contentIn;
  console.log(address, content);
  const web3 = fetchData();
  let transferError = null;
  const makeTrans = async (web3el) => {
    console.log("beforew TRY", web3el);
    try {
      // Stores a given value, 5 by default.
      await web3el.contract.methods
        .addToBlockchain(address, content)
        .send({ from: web3el.accounts[0], gas: 6721975 });

      // Get the value from the contract to prove it worked.
      const response = JSON.stringify(
        await web3el.contract.methods.getAllTransactions().call()
      );
      // Update state with the result.
      console.log(response);
    } catch (error) {
      console.log("err from sendData", error);
      transferError = error;
    }
  };
  makeTrans(web3);
  return transferError;
};

export default SendData;
