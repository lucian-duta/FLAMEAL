export default function validateInput(value) {
  let errors = {};

  if (!value) {
    errors.item = "Item name required";
  } else if (value.length > 30) {
    errors.item = "Item name too long";
  }

  return errors;
}
