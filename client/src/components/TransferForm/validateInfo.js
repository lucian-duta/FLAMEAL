export default function validateInfo(values) {
  let errors = {};

  if (!values.address) {
    errors.address = "Address required";
  } else if (values.address.length < 3) {
    errors.address = "Adddres must be x caracters or more";
  }

  if (!values.comments) {
    errors.comments = "Comment required";
  }

  return errors;
}
