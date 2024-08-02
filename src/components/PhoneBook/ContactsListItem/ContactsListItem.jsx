import userLogo from "/icons/user_icon.svg";
import iconClose from "/icons/icon_close.svg";
import {
  ButtonClose,
  ContactCredentials,
  ContactCredentialsSeparator,
  IconClose,
  ListItemWrapper,
  TagList,
  TagListItem,
  TagListItemName,
  UserAvatar,
} from "./ContactsListItem.styled";
import { ContactInfoWrapper } from "./ContactsListItem.styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/contacts-selectors";
import { Spinner } from "../../Global/Spiner/Spinner";

export const ContactsListItem = () => {
  const contacts = useSelector(selectContacts);
  console.log("contacts FIELDS", contacts && contacts);

  return (
    <>
      {contacts.length !== 0 ? (
        contacts.map(({ id, avatar_url, fields, tags }) => (
          <>
            <ListItemWrapper key={id}>
              <Link to="contacts/1">
                <ContactInfoWrapper>
                  {" "}
                  <UserAvatar
                    src={avatar_url || userLogo}
                    width={54}
                    height={54}
                  />
                  <ul>
                    <li>
                      {" "}
                      <ContactCredentials>
                        <ContactCredentialsSeparator>
                          {fields && fields["first name"][0].value}
                        </ContactCredentialsSeparator>
                        <ContactCredentials>
                          {" "}
                          {fields && fields["last name"][0].value}
                        </ContactCredentials>
                      </ContactCredentials>
                    </li>
                    <li>
                      <ContactCredentials>
                        {fields.email && fields.email[0].value}
                      </ContactCredentials>
                    </li>

                    <TagList>
                      {/* {tags.length !== 0 &&
                        tags.map((item, idx) => (
                          <li key={idx}>{item || "TAg 1"}</li>
                        ))} */}
                      <TagListItem>
                        <TagListItemName>tag 1</TagListItemName>
                      </TagListItem>
                      <TagListItem>
                        <TagListItemName>tag 1</TagListItemName>
                      </TagListItem>
                      <TagListItem>
                        <TagListItemName>tag 1</TagListItemName>
                      </TagListItem>
                      <TagListItem>
                        <TagListItemName>tag 1</TagListItemName>
                      </TagListItem>
                      <TagListItem>
                        <TagListItemName>tag 1</TagListItemName>
                      </TagListItem>
                    </TagList>
                  </ul>
                </ContactInfoWrapper>
              </Link>

              <ButtonClose type="button">
                <IconClose src={iconClose} width={24} height={24} />
              </ButtonClose>
            </ListItemWrapper>
          </>
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
};
