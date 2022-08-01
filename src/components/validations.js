import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Password does not match"),
});

export default validations;
