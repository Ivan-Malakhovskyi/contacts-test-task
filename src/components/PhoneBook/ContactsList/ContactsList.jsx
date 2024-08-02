import { useSelector } from "react-redux";
import { ContactsListItem } from "../ContactsListItem/ContactsListItem";
import { ContactsListStyled, Topic } from "./ContactsList.syled";
import { selectLoading } from "../../redux/contacts/contacts-selectors";
import { Spinner } from "../../Global/Spiner/Spinner";

export const ContactsList = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <section>
      <Topic>Contacts</Topic>

      {isLoading ? (
        <Spinner />
      ) : (
        <ContactsListStyled>
          {" "}
          <ContactsListItem />
        </ContactsListStyled>
      )}
    </section>
  );
};
