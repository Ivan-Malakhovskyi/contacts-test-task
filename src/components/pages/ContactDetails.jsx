import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  addTagToContact,
  getContactById,
} from "../redux/contacts/contacts-operations";
import {
  selectContactById,
  selectError,
  selectLoading,
} from "../redux/contacts/contacts-selectors";
import {
  AvatarWrapper,
  ContactDetailsStyled,
  TagListItemName,
  UserAvatar,
  Topic,
  TagList,
  TagListItem,
  ContactDetailsContainer,
} from "../PhoneBook/ContactsListItem/ContactsListItem.styled";
import {
  Button,
  Form,
  FormSection,
  Input,
} from "../PhoneBook/ContactsForm/ContactsForm.styled";

import { transformSimpleField } from "../utils";

import { Spinner } from "../Global/Spiner/Spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getContactById(id));
  }, [dispatch, id]);

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const { register, handleSubmit, reset } = useForm({ tags: [""] });

  const onSubmit = (data) => {
    if (!data || data.tags.trim() === "") {
      toast.error("Data is Empty");
      return;
    }

    const splitedTags = data.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    const tags = { ...transformSimpleField("tags", splitedTags) };

    if (!isError && !isLoading) {
      dispatch(addTagToContact({ tags, id }));
      toast.success("Contact successfully created");
      reset();
    }
  };

  const contactInfo = useSelector(selectContactById);

  const item = contactInfo && contactInfo[0];

  const isLastNameExist =
    item && Object.keys(item.fields).includes("last name");

  return (
    <>
      {contactInfo && contactInfo.length !== 0 && (
        <section>
          <ContactDetailsContainer>
            {" "}
            <ContactDetailsStyled>
              {" "}
              <AvatarWrapper>
                <UserAvatar src={item.avatar_url} width="54px" height="54px" />
              </AvatarWrapper>
              <ul>
                <li>
                  <TagListItemName>
                    {item.fields && item.fields["first name"][0].value}
                  </TagListItemName>
                  <TagListItemName>
                    {isLastNameExist && item.fields["last name"][0]?.value}
                  </TagListItemName>
                </li>
                <li>
                  <TagListItemName>
                    {item.fields.email[0].value}
                  </TagListItemName>
                </li>
              </ul>
            </ContactDetailsStyled>
            <Topic>Tags</Topic>
            <TagList>
              {item.tags &&
                item.tags.map(({ id, tag }) => (
                  <TagListItem key={id}>
                    <TagListItemName>{tag}</TagListItemName>
                  </TagListItem>
                ))}
            </TagList>
            <FormSection>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("tags")} placeholder="Add new Tag" />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Loading..." : "Add Tag"}
                </Button>
              </Form>
            </FormSection>
          </ContactDetailsContainer>
          <ToastContainer />
        </section>
      )}
      {isLoading && !isError && <Spinner />}
    </>
  );
};
