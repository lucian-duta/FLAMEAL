import getData, { fetchTransactions } from "./getData";

const extractFeatures = () => {
  getData().then(() => {
    const transactions = fetchTransactions();
    console.log(transactions);
    let features = {
      transactionCount: 0,
    };
    let senders = [];
    transactions.forEach((transaction, index) => {
      senders.push(transaction.sender);
    });

    features.transactionCount = senders.length + 1;
    //build a hashmap using reduce to assign each elemnt in the array
    //with the number of occurences
    const hashmap = senders.reduce((acc, val) => {
      //if the value is already in the array created, increment the value
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    //extract an array of the most top most occured addresses in the sender array
    //based on the values of the hashmap created earlier
    let topSenders = Object.keys(hashmap).filter((x) => {
      return hashmap[x] == Math.max.apply(null, Object.values(hashmap));
    });

    console.log(senders);
    console.log("top senders", topSenders);
  });
};

export default extractFeatures;
