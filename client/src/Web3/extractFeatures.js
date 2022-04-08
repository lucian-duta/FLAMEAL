import getData, { fetchTransactions } from "./getData";

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

const extractFeatures = () =>
  new Promise(async (resolve, reject) => {
    getData()
      .then(() => {
        const transactions = fetchTransactions();
        console.log(transactions);
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
        let receivers = [];
        let receiversLM = [];
        transactions.forEach((transaction, index) => {
          //populate the senders array with the addresses of the senders
          senders.push(transaction.sender);
          receivers.push(transaction.receiver);
          let month = new Date(transaction.timestamp * 1000).getMonth();
          tMap.set(month, tMap.get(month) + 1);

          //if the transaction happened in the last month
          //the timestamp is compared with the current time - 1 month (in seconds)
          //for more details research UNIX time
          if (transaction.timestamp > Math.trunc(Date.now() / 1000) - 2629746) {
            //populate the senders last month array with the addresses of the senders
            sendersLM.push(transaction.sender);
            receiversLM.push(transaction.receiver);
          }
        });
        features.transactionCount = senders.length + 1;
        features.donatePerMonth = tMap;
        console.log(features.donatePerMonth);
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
export const fetchTopSenders = () => {
  return features.topSenders;
};
export const fetchTransLastMonth = () => {
  return features.transLastMonth;
};
export const fetchContLastMonth = () => {
  return features.contributorsLastMonth;
};
export const fetchPeopleAided = () => {
  return features.receivers;
};
export const fetchPeopleAidedLM = () => {
  return features.receiversLM;
};
export const fetchTransCount = () => {
  return features.transactionCount;
};
export const fetchTotalUsers = () => {
  return features.totalUsers;
};
export const fetchTotalSenders = () => {
  return features.totalSenders;
};
export const fetchDonPerMonth = () => {
  return features.donatePerMonth;
};
export const fetchRecMap = () => {
  return features.recieversMap;
};
