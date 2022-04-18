/**
 * Function used to validate the user input of the register form
 * @category Login
 * @function validateRegister
 * @param {Object} values - the values to be validated
 * @returns {Array} the array of errors found
 */
export default function validateRegister(values) {
  //create an empty array
  let errors = {};

  if (!values.name) {
    //if the address field is empty update error
    errors.name = "Address required";
  } else if (values.name.length < 3) {
    //if the address is too short update error
    errors.name = "Adddres must be 3 caracters or more";
  } else if (values.name.length > 20) {
    //if the address is too long update error
    errors.name = "Adddres must be 20 caracters or less";
  }

  return errors;
}
