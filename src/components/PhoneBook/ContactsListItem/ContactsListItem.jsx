import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  ButtonClose,
  ContactCredentials,
  ContactCredentialsSeparator,
  IconClose,
  ListItemWrapper,
  Tag,
  TagList,
  TagListItem,
  UserAvatar,
} from "./ContactsListItem.styled";
import { ContactInfoWrapper } from "./ContactsListItem.styled";
import { selectContacts } from "../../redux/contacts/contacts-selectors";
import { deleteContactById } from "../../redux/contacts/contacts-operations";

import { toast } from "react-toastify";
import userLogo from "/icons/user_icon.svg";
import iconClose from "/icons/icon_close.svg";

export const ContactsListItem = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch(deleteContactById(contactId));
    toast.success("Contact was successfully deleted");
  };

  return (
    <>
      {contacts && contacts.length !== 0 ? (
        contacts.map(({ id, avatar_url, fields, tags }) => (
          <ListItemWrapper key={id}>
            <Link to={`/contact/${id}`}>
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
                    {tags.length !== 0 &&
                      tags.map((item) => (
                        <TagListItem key={item.id}>
                          <Tag>{item.tag}</Tag>
                        </TagListItem>
                      ))}
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
