import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { Home } from "./components/pages/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContactsList } from "./components/redux/contacts/contacts-operations";
import { ContactDetails } from "./components/pages/ContactDetails";
import { Layout } from "./components/layout/Layout";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};

export default App;
