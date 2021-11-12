import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const Global = createGlobalStyle`
  ${normalize};
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    position: relative;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5, h6, button, input {
    ${'' /* font-family: 'Nanum Pen Script', cursive; */}
  }
  p, footer, li, header {
    ${'' /* font-family: 'Klee One', sans-serif; */}
    font-weight: 600;
  }
  h1 { 
    font-size: calc(2em * 2.5);
  }
  h2 {
    font-size: calc(1.7411em * 2.5);
  }
  h3 {
    font-size: calc(1.5157em * 2.5);
  }
  h4 {
    font-size: calc(1.3195em * 2.5);
  }
  h5 {
    font-size: calc(1.1487em * 2.5);
  }
  p {
    font-size: calc(1em * 1.15);
  }
  footer {
    font-size: calc(.8706em * 1.15);
  }
`;

// https://spencermortensen.com/articles/typographic-scale/

export default Global;
