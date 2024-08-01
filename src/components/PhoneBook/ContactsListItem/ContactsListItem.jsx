import userLogo from "/icons/user_icon.svg";
import iconClose from "/icons/icon_close.svg";
import {
  ButtonClose,
  ContactCredentials,
  IconClose,
  ListItemWrapper,
  UserAvatar,
} from "./ContactsListItem.styled";
import { ContactInfoWrapper } from "./ContactsListItem.styled";
import { Link } from "react-router-dom";

export const ContactsListItem = () => {
  return (
    <ListItemWrapper>
      <Link to="/contacts/1">
        <ContactInfoWrapper>
          {" "}
          <UserAvatar src={userLogo} width={54} height={54} />
          <ul>
            <li>
              {" "}
              <ContactCredentials>First Name Last Name</ContactCredentials>
            </li>
            <li>
              <ContactCredentials>Email</ContactCredentials>
            </li>
          </ul>
        </ContactInfoWrapper>
      </Link>

      <ButtonClose type="button">
        <IconClose src={iconClose} width={24} height={24} />
      </ButtonClose>
    </ListItemWrapper>
  );
};
