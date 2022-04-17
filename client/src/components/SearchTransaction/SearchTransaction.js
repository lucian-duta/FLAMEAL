import React, { useEffect, useState } from "react";
import "./Searchtransaction.css";
import { RiSearchEyeLine } from "react-icons/ri";
import GridLoader from "react-spinners/GridLoader";
import useSearch from "./useSearch";
import TransItem from "../TransactionItem/TransItem";
import validateSearch from "./validateSearch";

/**
 * The component that handles the search transaction feature using the {@link useSearch} function,
 * the input is validated using the {@link validateSearch}
 * function and the results are displayed using the {@link TransItem} component.
 *
 * TODO: Make the search more efficient (Lazy loading, infinite scroll or any other better way)
 * @category Search Transactions
 * @component
 * @returns {ReactComponent} the search transaction component
 */
const SearchTransaction = () => {
  const [searchValue, setSearchValue] = useState("");
  const [storeSearch, setStoreSearch] = useState("");
  const [error, setError] = useState("");
  const { handleSearch, results, isFetching, found } = useSearch(error);

  return (
    <>
      <div className="search-trans-container">
        <h1>Search Transactions</h1>
        <div className="search-container">
          <input
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setError(validateSearch(e.target.value));
            }}
            onClick={() => {
              setSearchValue("");
            }}
            className="search-input"
            placeholder="Sender or Receiver address"
          />

          <button
            className="search-button"
            onClick={() => {
              setStoreSearch(searchValue);
              handleSearch(searchValue);
            }}
          >
            <RiSearchEyeLine className="search-icon" />
          </button>
        </div>
        <div className="error">{error && <p>{error}</p>}</div>
        <div className="error">{!found && <p>Address not found</p>}</div>

        {isFetching && (
          <div className="loader">
            <GridLoader color={"#fff"} size={"30px"} />
          </div>
        )}

        <div className="search-results">
          {results.map((result, index) => (
            <div key={index * 123123}>
              <TransItem result={result} index={index} searched={storeSearch} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchTransaction;
