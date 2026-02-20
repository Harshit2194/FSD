export const validateUserForm = (form) => {
  const errors = {};

  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.contact.trim()) errors.contact = "Contact is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Invalid email address";
  if (!form.designation.trim()) errors.designation = "Designation is required";
  if (!form.company.trim()) errors.company = "Company is required";
  if (!form.address.trim()) errors.address = "Address is required";

  return errors;
};

export const isFormValid = (errors) => Object.keys(errors).length === 0;
