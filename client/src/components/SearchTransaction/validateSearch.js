/**
 * Function to validate the input of the search field
 * @category Search Transactions
 * @function validateSearch
 * @param {Object} value - the input to be validated
 * @returns
 */
export default function validateSearch(value) {
  //create an empty array
  let error = "";

  if (value.length === 0) {
    //setting the error in case the field is empty
    error = "Address required";
  } else if (value.length > 42) {
    //setting the error in case the input is over 30 caracters to prevent overloading the blockchain network
    error = "Address too long";
  } else if (value.length < 42) {
    error = "Address too short";
  }
  return error;
}
