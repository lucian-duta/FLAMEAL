/**
 * Function used to validate the input of the edit foodbank form EditFoodBank
 *
 * @param {Object} values - the values to be validated
 * @returns  an array of errors
 */
export default function validateEdit(values) {
  //create an empty array
  let errors = {};

  if (!values.name) {
    //if the address field is empty update error
    errors.name = "Name required";
  } else if (values.name.length < 3) {
    //if the address is too short update error
    errors.name = "Name must be 3 caracters or more";
  } else if (values.name.length > 34) {
    //if the address is too short update error
    errors.name = "Name must less than 34 characters";
  }

  if (!values.description) {
    //if the comments field is empty update error
    errors.description = "Description required";
  } else if (values.description.length > 585) {
    //setting the error in case the comment is over 100 caracters
    //to prevent overloading the blockchain network
    errors.description = "Description too long";
  }
  if (!values.pic) {
    //if the comments field is empty update error
    errors.pic = "Image required required";
  }
  // else if (values.pic.length > 100) {
  //   //setting the error in case the comment is over 100 caracters
  //   //to prevent overloading the blockchain network
  //   errors.description = "Description too long";
  // }

  return errors;
}
