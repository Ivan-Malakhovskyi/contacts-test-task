import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
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
  BackLink,
} from "../PhoneBook/ContactsListItem/ContactsListItem.styled";
import {
  Button,
  Form,
  FormSection,
  Input,
} from "../PhoneBook/ContactsForm/ContactsForm.styled";

import arrow from "/public/icons/arrow_back.svg";

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

  const location = useLocation();

  const backLinkLocation = useRef(location.state?.from ?? "/");

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const contactInfo = useSelector(selectContactById);

  const item = contactInfo && contactInfo[0];

  const { register, handleSubmit, reset } = useForm({ tags: [""] });

  const onSubmit = (data) => {
    if (!data || data.tags.trim() === "") {
      toast.error("Data is Empty");
      return;
    }

    const isDuplicate =
      item.tags.find((item) => item.tag.toLowerCase() === data.tags) ?? [];

    if (isDuplicate.length !== 0) {
      toast.error("Found duplicate tags");
      return;
    }

    const splitedTags = data.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    const existTags = item.tags.length !== 0 && item.tags;

    const newTags = splitedTags.map((tag) => ({ tag }));

    const combinedTags = existTags
      ? [...existTags, ...newTags].map(({ tag }) => tag)
      : splitedTags;

    const tags = {
      ...transformSimpleField("tags", combinedTags),
    };

    if (!isError && !isLoading) {
      dispatch(addTagToContact({ tags, id }));
      toast.success("Contact successfully created");
      reset();
    }
  };

  const isFirsNameExist =
    item && Object.keys(item.fields).includes("first name");

  const isLastNameExist =
    item && Object.keys(item.fields).includes("last name");

  return (
    <>
      {!isError && isLoading ? (
        <Spinner />
      ) : (
        contactInfo &&
        contactInfo.length !== 0 && (
          <section>
            <ContactDetailsContainer>
              <BackLink icon={arrow} to={backLinkLocation.current}>
                Back
              </BackLink>

              <ContactDetailsStyled>
                {" "}
                <AvatarWrapper>
                  <UserAvatar
                    src={item.avatar_url}
                    width="54px"
                    height="54px"
                  />
                </AvatarWrapper>
                <ul>
                  <li>
                    <TagListItemName>
                      {isFirsNameExist && item.fields["first name"][0].value}
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
                {item.tags.length !== 0 &&
                  item.tags.map(({ id, tag }) => (
                    <TagListItem key={id}>
                      <TagListItemName>{tag}</TagListItemName>
                    </TagListItem>
                  ))}
              </TagList>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("tags")} placeholder="Add new Tag" />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Loading..." : "Add Tag"}
                </Button>
              </Form>
            </ContactDetailsContainer>
            <ToastContainer />
          </section>
        )
      )}
    </>
  );
};
