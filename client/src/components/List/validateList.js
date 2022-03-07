/**
 * *validateInput
 * *Function used to validate the inputs of the list
 * @param {*} value - the value to be validated
 * @returns - the array of errors found
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
