import { render } from "@testing-library/react";

import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyle";

describe("App", () => {
  it("renders", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );
  });
});
