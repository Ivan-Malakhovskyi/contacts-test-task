import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { Home } from "./components/pages/Home";
import { ContactDetails } from "./components/pages/ContactDetails";
import { Layout } from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>

      <button
        type="button"
        onClick={() => {
          console.log("Click");
        }}
      >
        Click
      </button>

      <GlobalStyle />
    </>
  );
};

export default App;
