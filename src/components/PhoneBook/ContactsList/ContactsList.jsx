import { ContactsListItem } from "../ContactsListItem/ContactsListItem";
import { ContactsListStyled, Topic } from "./ContactsList.syled";

export const ContactsList = () => {
  return (
    <section>
      <Topic>Contacts</Topic>

      <ContactsListStyled>
        {" "}
        <ContactsListItem />
      </ContactsListStyled>
    </section>
  );
};
