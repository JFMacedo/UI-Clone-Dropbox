import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
  }

  :root {
  --primary: #0D2F81;
  --secondary: #FFE7AA;
  --tertiary: #FFFFFF;
  --quaternary: #000000;
  --blue: #0061FF;
  --border: #BDC4C9;
  }
`;