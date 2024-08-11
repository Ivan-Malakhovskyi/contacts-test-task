import { render, screen } from "@testing-library/react";
import { create } from "react-test-renderer";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyle";
import "@testing-library/jest-dom";
import { act } from "react";

test("render Home component at root path", () => {
  act(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );
  });

  const createContactElement = screen.getByText("Contacts");
  expect(createContactElement).toBeInTheDocument();
});

it("when btn clicked, cb should be called", () => {
  const spy = jest.fn();
  act(() => {
    render(<button onClick={spy}>Click</button>);
  });

  screen.getByText("Click").click();
  expect(spy).toHaveBeenCalled();
});

// it("snapshot", () => {
//   const tree = create(<button onClick={() => null}>Click</button>).toJSON();

//   expect(tree).toMatchSnapshot();
// });
