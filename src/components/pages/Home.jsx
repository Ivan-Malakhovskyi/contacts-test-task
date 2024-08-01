import { ContactsForm } from "../PhoneBook/ContactsForm/ContactsForm";
import { MainPageList } from "../Global/MainPageList.styled";
import { ContactsList } from "../PhoneBook/ContactsList/ContactsList";

export const Home = () => {
  return (
    <>
      <MainPageList>
        <li>
          {" "}
          <ContactsForm />
        </li>
        <li>
          {" "}
          <ContactsList />
        </li>
      </MainPageList>
    </>
  );
};
