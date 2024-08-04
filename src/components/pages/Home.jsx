import { ContactsForm } from "../PhoneBook/ContactsForm/ContactsForm";
import {
  MainPageFormWrapper,
  MainPageList,
  MainPageListItem,
} from "../Global/MainPageList.styled";
import { ContactsList } from "../PhoneBook/ContactsList/ContactsList";

export const Home = () => {
  return (
    <MainPageList>
      {" "}
      <MainPageFormWrapper>
        {" "}
        <ContactsForm />
      </MainPageFormWrapper>
      <MainPageListItem>
        {" "}
        <ContactsList />
      </MainPageListItem>
    </MainPageList>
  );
};
