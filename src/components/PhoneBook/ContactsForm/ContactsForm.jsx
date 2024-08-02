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
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../../redux/contacts/contacts-operations";
import { transformField } from "../../utils";
import {
  selectContacts,
  selectLoading,
} from "../../redux/contacts/contacts-selectors";

const defaultValues = {
  "first name": "",
  "last name": "",
  email: "",
};

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(createContactSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
    if (!data) {
      toast.error("Data is Empty");
      return;
    }

    const isContactExist = contacts.filter(
      (contact) =>
        contact.fields["first name"][0].value.toLowerCase() ===
        data["first name"]
    );

    if (isContactExist.length !== 0) {
      toast.error("Such contact is exist");
      return;
    }

    const transformedData = {
      ...transformField("first name", data["first name"]),
      ...transformField("last name", data["last name"]),
      ...transformField("email", data.email),
    };

    const updatedObj = {
      fields: {
        ...transformedData,
      },
      record_type: "person",
      privacy: {
        edit: null,
        read: null,
      },
      owner_id: null,
    };

    dispatch(createContact(updatedObj));
    toast.success("Contact successfully created");
    reset();
  };

  return (
    <FormSection>
      <Title>Create Contact</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="first name">First Name</Label>

        <Input {...register("first name")} />

        {errors["first name"] && <ErrorMsg>This field is required</ErrorMsg>}

        <Label htmlFor="last name">Last name</Label>
        <Input {...register("last name")} />

        {errors["last name"] && <ErrorMsg>This field is required</ErrorMsg>}

        <Label htmlFor="email">Email</Label>
        <Input {...register("email")} />

        {errors.email && <ErrorMsg>This field is required</ErrorMsg>}

        <Button type="submit">
          {isLoading ? "Loading..." : "Create contact"}
        </Button>
      </Form>
      <ToastContainer />
    </FormSection>
  );
};
