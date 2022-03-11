/**
 * * validateInfo
 * * Validates the inputs from the transfer form
 * @param {*} values - the values to be validated
 * @returns - an array of errors
 */
export default function validateInfo(values) {
  //create an empty array
  let errors = {};

  if (!values.address) {
    //if the address field is empty update error
    errors.address = "Address required";
  } else if (values.address.length < 42) {
    //if the address is too short update error
    errors.address = "Adddres must be x caracters or more";
  }

  if (!values.comments) {
    //if the comments field is empty update error
    errors.comments = "Comment required";
  } else if (values.comments.length > 100) {
    //setting the error in case the comment is over 100 caracters
    //to prevent overloading the blockchain network
    errors.item = "Item name too long";
  }

  if (!values.itemsList || values.itemsList.length === 0) {
    //if the list is empty update errors
    errors.itemsList = "There are no goods in the contract";
  }

  return errors;
}
