import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  ErrorMsg,
  Form,
  FormSection,
  Input,
  Label,
  Title,
} from "./ContactsForm.styled";

import { createContactSchema } from "../../schemas";

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
};

export const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createContactSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
    if (!data) {
      toast.error("Data is Empty");
      return;
    }

    toast.success("Contact was successfully created");
  };

  return (
    <FormSection>
      <Title>Create Contact</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="first_name">First Name</Label>
        <Input {...register("first_name")} />

        {errors.first_name && <ErrorMsg>This field is required</ErrorMsg>}

        <Label htmlFor="last_name">Last name</Label>
        <Input {...register("last_name")} />

        {errors.last_name && <ErrorMsg>This field is required</ErrorMsg>}

        <Label htmlFor="email">Email</Label>
        <Input {...register("email")} />

        {errors.email && <ErrorMsg>This field is required</ErrorMsg>}

        <Button type="submit">Create contact</Button>
      </Form>
      <ToastContainer />
    </FormSection>
  );
};
