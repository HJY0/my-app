import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  body {
    margin: 0;
    background: ${({ dark }) => (dark ? "#000" : "#fff")};
    color: ${(props) => (props.dark ? "#fff" : "#000")};
  }
`;

GlobalStyle.displayName = "GlobalStyle";
