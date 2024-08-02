import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getContactById } from "../redux/contacts/contacts-operations";
import { selectContactById } from "../redux/contacts/contacts-selectors";
import { Spinner } from "../Global/Spiner/Spinner";
import {
  AvatarWrapper,
  ContactDetailsStyled,
  TagListItemName,
  UserAvatar,
  Topic,
  TagList,
  TagListItem,
} from "../PhoneBook/ContactsListItem/ContactsListItem.styled";

export const ContactDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactById(id));
  }, [dispatch, id]);

  const contactInfo = useSelector(selectContactById);
  const item = contactInfo[0];

  return (
    <>
      {contactInfo.length !== 0 ? (
        <>
          {" "}
          <section>
            <ContactDetailsStyled>
              {" "}
              <AvatarWrapper>
                <UserAvatar src={item.avatar_url} width="54px" height="54px" />
              </AvatarWrapper>
              <ul>
                <li>
                  <TagListItemName>
                    {item.fields["first name"][0].value}
                  </TagListItemName>
                  <TagListItemName>
                    {item.fields["last name"][0].value}
                  </TagListItemName>
                </li>
                <li>
                  <TagListItemName>
                    {item.fields.email[0].value}
                  </TagListItemName>
                </li>
              </ul>
            </ContactDetailsStyled>
            <div>
              {" "}
              <Topic>Tags</Topic>
              <TagList>
                <TagListItem>
                  <TagListItemName>Tag 1</TagListItemName>
                </TagListItem>
                <TagListItem>
                  <TagListItemName>Tag 1</TagListItemName>
                </TagListItem>
              </TagList>
            </div>
          </section>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
