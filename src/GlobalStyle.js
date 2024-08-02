import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    MainBlack: "#000000",
    MainBackgroundColor: "#ffffff",
    accentBgColor: "#A6A6A6",
    addBgColor: "#EDEDED",
    MainColorInput: "#AAAAAA",
  },
};

export const GlobalStyle = createGlobalStyle`


body {
  background-color: ${({ theme: { colors } }) => colors.MainBackgroundColor};
  font-family: "Poppins", sans-serif;
  font-size: 16px;
    font-weight: 400;
  font-style: normal;
  line-height: 1.5;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover; 
  height: auto;
  margin: 0 auto;
}

ul,li,h1, h2, h3, h4, h5, h6, p {
font-family: inherit;
padding: 0;
  margin: 0;
  list-style: none;
}

a {
  font-family: inherit;
  text-decoration: none;
  display: inline-block;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

`;
