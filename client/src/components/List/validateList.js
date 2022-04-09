/**
 * Function used to validate the input of the list form from the ListFill component
 * @param {Object} value - the input to be validated
 * @returns {Array} - the array of errors found
 */
export default function validateInput(value) {
  //create an empty array
  let errors = {};

  if (!value) {
    //setting the error in case the field is empty
    errors.item = "Item name required";
  } else if (value.length > 30) {
    //setting the error in case the input is over 30 caracters to prevent overloading the blockchain network
    errors.item = "Item name too long";
  }

  return errors;
}
