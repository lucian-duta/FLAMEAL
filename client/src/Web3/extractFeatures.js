import getData, { fetchTransactions } from "./getData";

let features = {
  transactionCount: 0,
  transLastMonth: null,
  topSenders: [],
  contributorsLastMonth: null,
};
const extractFeatures = () => {
  getData().then(() => {
    const transactions = fetchTransactions();
    console.log(transactions);

    //array to hold the senders
    let senders = [];
    //array to hold the senders in the last month
    let sendersLM = [];
    transactions.forEach((transaction, index) => {
      //populate the senders array with the addresses of the senders
      senders.push(transaction.sender);
      //if the transaction happened in the last month
      //the timestamp is compared with the current time - 1 month (in seconds)
      //for more details research UNIX time
      if (transaction.timestamp > Math.trunc(Date.now() / 1000) - 2629746) {
        //populate the senders last month array with the addresses of the senders
        sendersLM.push(transaction.sender);
      }
    });

    features.transactionCount = senders.length + 1;

    //function to create a hashmap of an array
    const createHashmap = (senders) => {
      //build a hashmap using reduce to assign each elemnt in the array
      //with the number of occurences
      const hashmap = senders.reduce((acc, val) => {
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

    console.log("all senders", senders);
    console.log("top senders", features.topSenders);
    console.log("trans last montg", features.transLastMonth);
    console.log("contr last montg", features.contributorsLastMonth);
  });
};

export default extractFeatures;
export const fetchTopSenders = () => {
  return features.topSenders;
};
export const transLastMonth = () => {
  return features.transLastMonth;
};
export const contLastMonth = () => {
  return features.contributorsLastMonth;
};
