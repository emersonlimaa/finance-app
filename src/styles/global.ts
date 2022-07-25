import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #F0F2F5;
  --red: #E52E4D;
  --blue:#5429CC;
  --green: #33CC95;
  --blue-light:#6933FF;
  --text-title:#363F5F;
  --text-body:#969CB3;
  --shape: #ffffff;
}

*{
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

html{
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body, input, textarea, button{
  font-family: "poppins", sans-serif;
  font-weight: 400;
}

h1, h2,h3,h4,h5,h6, strong{
  font-weight: 600;
}

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

button{
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}
`