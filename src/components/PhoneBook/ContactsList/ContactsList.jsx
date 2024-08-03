import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { ContactsListItem } from "../ContactsListItem/ContactsListItem";
import { ContactsListStyled, Topic } from "./ContactsList.syled";
import { selectLoading } from "../../redux/contacts/contacts-selectors";
import { Spinner } from "../../Global/Spiner/Spinner";
import { getContactsList } from "../../redux/contacts/contacts-operations";

export const ContactsList = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch]);

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
