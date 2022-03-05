import getWeb3 from "../../getWeb3";
import GoodsTransfer from "../../contracts/GoodsTransfer.json";

let web3Elements = {
  web3: null,
  accounts: null,
  contract: null,
};

const getData = () =>
  new Promise(async (resolve, reject) => {
    try {
      // Get network provider and web3 instance.
      web3Elements.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      web3Elements.accounts = await web3Elements.web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3Elements.web3.eth.net.getId();
      const deployedNetwork = GoodsTransfer.networks[networkId];
      web3Elements.contract = new web3Elements.web3.eth.Contract(
        GoodsTransfer.abi,
        deployedNetwork && deployedNetwork.address
      );
      console.log(web3Elements);
      resolve(web3Elements);
    } catch (error) {
      reject(error);
      console.log(
        error,
        "Failed to load web3, accounts, or contract...check console for details"
      );
    }
  });

export default getData;
export const fetchData = () => {
  return web3Elements;
};
