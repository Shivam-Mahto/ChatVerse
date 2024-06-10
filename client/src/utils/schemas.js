import * as yup from "yup";

export const loginSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "Enter a valid phone number")
    .max(10, "Enter a valid phone number"),
  password: yup.string().required("Password is required"),
});

export const signupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "Enter a valid phone number")
    .max(10, "Enter a valid phone number"),
  password: yup.string().required("Password is required"),
});
