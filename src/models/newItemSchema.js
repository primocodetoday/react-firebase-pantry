export const newItemSchema = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'required';
  } else if (!values.category) {
    errors.category = 'required';
  } else if (!/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/i.test(values.stock)) {
    errors.stock = 'wrong number';
  } else if (!/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/i.test(values.maxStock)) {
    errors.maxStock = 'wrong number';
  } else if (!/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/i.test(values.minStock)) {
    errors.minStock = 'wrong number';
  } else if (!values.unit) {
    errors.unit = 'required';
  }
  return errors;
};
