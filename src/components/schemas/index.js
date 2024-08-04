import * as yup from "yup";

const nameRegex = /^[a-zA-Zа-яА-Я\s'-]*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const createContactSchema = yup
  .object()
  .shape({
    "first name": yup
      .string()
      .matches(nameRegex, "Name should not contain numbers"),
    "last name": yup
      .string()
      .matches(nameRegex, "Name should not contain numbers"),
    email: yup.string().matches(emailRegex, "Invalid email format").required(),
  })
  .test(
    "at-least-one-name",
    "Either first name or last name is required",
    function (values) {
      return values["first name"] || values["last name"];
    }
  );
