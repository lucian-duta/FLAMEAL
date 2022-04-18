import React, { useState } from "react";
import getWeb3Http from "../../Web3/getWeb3Http";

/**
 * The function to hadle the logic behind the search transaction feature. The data is fetched by calling
 * the {@link getWeb3Http} and extracting all the transactions from the response
 * @category Search Transactions
 * @function useSearch
 * @param {String} error - the error generated after the validation of the input
 * @returns {Function} handleSearch - the function that handles the search transaction
 * @returns {Array} results - the array of the results of the search
 * @returns {Boolean} isFetching - the boolean that indicates if the search is being executed
 * @returns {Boolean} found - the boolean that indicates if the search was successful
 */
const useSearch = (error) => {
  const [results, setResults] = useState([]);
  const [found, setFound] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const handleSearch = (address) => {
    if (error === "") {
      setIsFetching(true);
      getWeb3Http().then((res) => {
        const fetchedTrans = res.transactions;
        const filtered = fetchedTrans.filter((transaction) => {
          return (
            transaction.sender === address || transaction.receiver === address
          );
        });
        if (filtered.length === 0) {
          setFound(false);
        } else {
          setFound(true);
        }
        setIsFetching(false);
        setResults(filtered);
      });
    }
  };

  return { handleSearch, results, isFetching, found };
};

export default useSearch;
