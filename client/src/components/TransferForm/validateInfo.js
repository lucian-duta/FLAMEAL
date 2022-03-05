/**
 * * validateInfo
 * * Validates the inputs from the transfer form
 * ! Current rules are just for testing
 * TODO: Implement validation for the item list
 * @param {*} values
 * @returns
 */
export default function validateInfo(values) {
  let errors = {};

  if (!values.address) {
    //! Current validation rules just for testing phase
    errors.address = "Address required";
  } else if (values.address.length < 3) {
    errors.address = "Adddres must be x caracters or more";
  }

  if (!values.comments) {
    //! Current validation rules just for testing phase
    errors.comments = "Comment required";
  }

  if (!values.itemsList || values.itemsList.length === 0) {
    errors.itemsList = "There are no goods in the contract";
  }

  return errors;
}
