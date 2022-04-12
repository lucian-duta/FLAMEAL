import { fetchData } from "./getData";

/**
 *Function to send the data to initaite the transaction on blockchain
 * @param {String} addressIn the address of the receiver
 * @param {String} contentIn the content of the transaction (the goods)
 * @returns {object | null} the transaction error object or null if the transaction was successful
 */
const SendData = (addressIn, contentIn) => {
  const address = addressIn;
  const content = contentIn;
  console.log(address, content);
  function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
  }
  const web3 = fetchData();
  let transferError = null;
  //define the transaction function
  const makeTrans = async (web3el) => {
    try {
      //attempt to send the transaction
      await web3el.contract.methods
        .addToBlockchain(address, content)
        .send(
          //the transaction options(the gas price is set to 0 to allow testing)
          { from: web3el.accounts[0], gas: 6721975, gasPrice: "0" },
          //the callback function to set the transaction error
          (err, res) => {
            if (err) {
              //if the user immediately cancels the transaction the error is updated
              console.log("error", err);
              transferError = err;
            } else {
              //if the transaction is confirmed the error is deleted
              console.log("success", res);
              transferError = null;
            }
          }
        )
        //when the transaction hash is available
        .on("transactionHash", function (hash) {
          //the user is notified of the transaction success and receives the hash
          alert("Transaction successful \nTransaction Hash: " + hash);
          //the page is refreshed after 3 seconds
          timedRefresh(3000);
        });
    } catch (error) {
      //if the transaction fails the error is set
      console.log("err from sendData", error);
      transferError = error;
      if (error.code === 4001) {
        //if the failure is due to the user cancelling the transaction the page is refreshed
        alert("Transaction failed. Please try again.");
        timedRefresh(3000);
      }
    }
  };
  //call the function to send the transaction
  makeTrans(web3);
  return transferError;
};

export default SendData;
