import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Container } from "./components/layout/Layout.styled";
import { GlobalStyle } from "./GlobalStyle";
import { Home } from "./components/pages/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContactsList } from "./components/redux/contacts/contacts-operations";
import { ContactDetails } from "./components/pages/ContactDetails";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts/1" element={<ContactDetails />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
