import getData, { fetchTransactions } from "./getData";
import getWeb3Http from "./getWeb3Http";
//global variable to hold the features
let features = {
  transactionCount: 0,
  transLastMonth: null,
  topSenders: [],
  contributorsLastMonth: null,
  receivers: null,
  receiversLM: null,
  totalUsers: 0,
  totalSenders: 0,
  donatePerMonth: null,
  recieversMap: null,
};

/**
 * Function to extract features from the smart contract deployed on the blockchain network using Web3. This function
 * is called when the app is loaded and it prepares the data to be consumed by various components.
 * @returns {Promise<Object>} - returns a promise that resolves to the features object or rejects with an error
 */
const extractFeatures = () =>
  new Promise(async (resolve, reject) => {
    //update the web3 instance with getdata
    getWeb3Http()
      .then((res) => {
        //get the transaction count
        const transactions = res.transactions;
        console.log(transactions);
        //declare the empty map to hold the data in specific order
        let tMap = new Map([
          [0, 0],
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0],
          [11, 0],
        ]);

        //array to hold the senders
        let senders = [];
        //array to hold the senders in the last month
        let sendersLM = [];
        //array to hold the receivers
        let receivers = [];
        //array to hold the receivers in the last month
        let receiversLM = [];
        //iterate through the transactions
        transactions.forEach((transaction, index) => {
          //populate the senders array with the addresses of the senders
          senders.push(transaction.sender);
          //populate the receivers array with the addresses of the receivers
          receivers.push(transaction.receiver);
          //populate the map with the transaction count of each month
          let month = new Date(transaction.timestamp * 1000).getMonth();
          tMap.set(month, tMap.get(month) + 1);

          //if the transaction happened in the last month
          //the timestamp is compared with the current time - 1 month (in seconds)
          //for more details research UNIX time
          if (transaction.timestamp > Math.trunc(Date.now() / 1000) - 2629746) {
            //populate the senders last month array with the addresses of the senders
            sendersLM.push(transaction.sender);
            //populate the receivers last month array with the addresses of the receivers
            receiversLM.push(transaction.receiver);
          }
        });
        //add the transaction count to the features object
        features.transactionCount = senders.length + 1;
        //add the transaction/month map to the features object
        features.donatePerMonth = tMap;
        console.log(features.donatePerMonth);

        /**
         * Function to take an array of addresses and return an array of unique addresses along with the count of each occurrence
         * @param {Array} addresses - array of the addresses to be included in the hashmap
         * @returns {Map}  returns a hashmap
         */
        const createHashmap = (addresses) => {
          //build a hashmap using reduce to assign each elemnt in the array
          //with the number of occurences
          const hashmap = addresses.reduce((acc, val) => {
            //if the value is already in the array created, increment the value
            acc[val] = (acc[val] || 0) + 1;
            return acc;
          }, {});
          return hashmap;
        };
        //create the hashmap for extracting the top senders
        let topHashmap = createHashmap(senders);
        console.log("tooooooop", topHashmap);
        //extract an array of the most top most occured addresses in the sender array
        //based on the values of the hashmap created earlier
        features.topSenders = Object.keys(topHashmap).filter((x) => {
          return topHashmap[x];
        });
        //counting the transactions last month
        features.transLastMonth = transactions.filter((obj) => {
          if (obj.timestamp > Math.trunc(Date.now() / 1000) - 2629746) {
            return true;
          }
          return false;
        }).length;

        //update the features with the number of contrubutors last month
        features.contributorsLastMonth = Object.keys(
          createHashmap(sendersLM)
        ).length;
        //update the features with the number of receivers
        features.receivers = Object.keys(createHashmap(receivers)).length;
        //update the features with the number of receivers last month
        features.receiversLM = Object.keys(createHashmap(receiversLM)).length;
        features.totalSenders = Object.keys(createHashmap(senders)).length;
        features.totalUsers = features.receivers + features.totalSenders;
        features.recieversMap = createHashmap(receivers);
        console.log("all senders", senders);
        console.log("top senders", features.topSenders);
        console.log("trans last montg", features.transLastMonth);
        console.log("contr last montg", features.contributorsLastMonth);
        console.log("people aided", features.receivers);
        console.log("people aided last month", features.receiversLM);
        resolve(features);
      })
      .catch(() => {
        console.log("error occured in extracion");
        reject();
      });
  });

export default extractFeatures;

/**
 * Function used to fetch the top senders from the {@link features} object
 * located in the {@link extractFeatures} function.
 *
 * The processed data comes from the smart contract deployed on the blockchain network.
 *
 * !IMPORTANT! If the the {@link extractFeatures} function is not called before calling this function,
 * the data returned by this function will be outdated. (dating back to the last time the {@link extractFeatures} function was called)
 * @returns {Array} an array of addresses of the top senders ordered from the most transactions to the least transactions
 */
export const fetchTopSenders = () => {
  return features.topSenders;
};

/**
 * Function used to fetch the number of contributors who performed any tranasaction over last 30 days from the {@link features} object
 * located in the {@link extractFeatures} function.
 *
 * The processed data comes from the smart contract deployed on the blockchain network.
 *
 * !IMPORTANT! If the the {@link extractFeatures} function is not called before calling this function,
 * the data returned by this function will be outdated. (dating back to the last time the {@link extractFeatures} function was called)
 * @returns {number} the number of contributors who performed any tranasaction over last 30 days
 */
export const fetchContLastMonth = () => {
  return features.contributorsLastMonth;
};

/**
 * Function used to fetch the number of receivers (occured in transactions where the address was declared as receiver) from the {@link features} object
 * located in the {@link extractFeatures} function.
 *
 * The processed data comes from the smart contract deployed on the blockchain network.
 *
 * !IMPORTANT! If the the {@link extractFeatures} function is not called before calling this function,
 * the data returned by this function will be outdated. (dating back to the last time the {@link extractFeatures} function was called)
 * @returns {number} the number of receivers
 */
export const fetchReceivers = () => {
  return features.receivers;
};

/**
 * Function used to fetch the number of receivers (occured in transactions where the address was declared as receiver) over the last 30 days
 * from the {@link features} object located in the {@link extractFeatures} function.
 *
 * The processed data comes from the smart contract deployed on the blockchain network.
 *
 * !IMPORTANT! If the the {@link extractFeatures} function is not called before calling this function,
 * the data returned by this function will be outdated. (dating back to the last time the {@link extractFeatures} function was called)
 * @returns {number} the number of receivers over the last 30 days
 */
export const fetchReceiversLM = () => {
  return features.receiversLM;
};

/**
 * Function used to fetch the number of transactions stored in the contract from the {@link features} object
 * located in the {@link extractFeatures} function.
 *
 * The processed data comes from the smart contract deployed on the blockchain network.
 *
 * !IMPORTANT! If the the {@link extractFeatures} function is not called before calling this function,
 * the data returned by this function will be outdated. (dating back to the last time the {@link extractFeatures} function was called)
 * @returns {number} the number of transactions stored in the contract
 */
export const fetchTransCount = () => {
  return features.transactionCount;
};

/**
 * Function used to fetch the number of transactions performed over last 30 days from the {@link features} object
 * located in the {@link extractFeatures} function.
 *
 * The processed data comes from the smart contract deployed on the blockchain network.
 *
 * !IMPORTANT! If the the {@link extractFeatures} function is not called before calling this function,
 * the data returned by this function will be outdated. (dating back to the last time the {@link extractFeatures} function was called)
 * @returns {number} the number of transactions performed over last 30 days
 */
export const fetchTransLastMonth = () => {
  return features.transLastMonth;
};

/**
 * Function used to fetch the number of unique users from the {@link features} object
 * located in the {@link extractFeatures} function.
 *
 * The processed data comes from the smart contract deployed on the blockchain network.
 *
 * !IMPORTANT! If the the {@link extractFeatures} function is not called before calling this function,
 * the data returned by this function will be outdated. (dating back to the last time the {@link extractFeatures} function was called)
 * @returns {number} the number of unique users
 */
export const fetchTotalUsers = () => {
  return features.totalUsers;
};

/**
 * Function used to fetch the number of senders from the {@link features} object
 * located in the {@link extractFeatures} function.
 *
 * The processed data comes from the smart contract deployed on the blockchain network.
 *
 * !IMPORTANT! If the the {@link extractFeatures} function is not called before calling this function,
 * the data returned by this function will be outdated. (dating back to the last time the {@link extractFeatures} function was called)
 * @returns {number} the number of senders
 */
export const fetchTotalSenders = () => {
  return features.totalSenders;
};

/**
 * Function used to fetch a map containing the last 12 months with the number of donations associated to each month
 * from the {@link features} object located in the {@link extractFeatures} function.
 *
 * The processed data comes from the smart contract deployed on the blockchain network.
 *
 * !IMPORTANT! If the the {@link extractFeatures} function is not called before calling this function,
 * the data returned by this function will be outdated. (dating back to the last time the {@link extractFeatures} function was called)
 * @returns {Map} the donation map
 */
export const fetchDonPerMonth = () => {
  return features.donatePerMonth;
};

/**
 * Function used to fetch a map containing the receivers with the number of transactions associated to each receiver
 * from the {@link features} object located in the {@link extractFeatures} function.
 *
 * The processed data comes from the smart contract deployed on the blockchain network.
 *
 * !IMPORTANT! If the the {@link extractFeatures} function is not called before calling this function,
 * the data returned by this function will be outdated. (dating back to the last time the {@link extractFeatures} function was called)
 * @returns {Map} the donation map
 */
export const fetchRecMap = () => {
  return features.recieversMap;
};
