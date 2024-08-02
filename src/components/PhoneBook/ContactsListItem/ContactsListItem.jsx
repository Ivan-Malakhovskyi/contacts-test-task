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
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/contacts-selectors";

import { deleteContactById } from "../../redux/contacts/contacts-operations";

export const ContactsListItem = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch(deleteContactById(contactId));
  };

  return (
    <>
      {contacts && contacts.length !== 0 ? (
        contacts.map(({ id, avatar_url, fields, tags }) => (
          <ListItemWrapper key={id}>
            <Link to={`contacts/${id}`}>
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
                        {fields["first name"] && fields["first name"][0].value}
                      </ContactCredentialsSeparator>
                      <ContactCredentials>
                        {" "}
                        {fields["last name"] && fields["last name"][0].value}
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

            <ButtonClose type="button" onClick={() => handleDelete(id)}>
              <IconClose src={iconClose} width={24} height={24} />
            </ButtonClose>
          </ListItemWrapper>
        ))
      ) : (
        <div>Empty</div>
      )}
    </>
  );
};
