import { ContactsListItem } from "../ContactsListItem/ContactsListItem";
import { Topic } from "./ContactsList.syled";

export const ContactsList = () => {
  return (
    <section>
      <Topic>Contacts</Topic>

      <ContactsListItem />
    </section>
  );
};
