import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
	font-family: "Rubik", sans-serif;
	line-height: 1.5;
	font-weight: 400;
	font-size: 18px;

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;

	--Vary_dark_gray: hsl(0, 0%, 17%);
	--Dark_gray: hsl(0, 0%, 59%);
  }
  
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    font-family: var(--ff-body);
    box-sizing: border-box;
  }
  
  input {
    height: 100%;
    width: 100%;
    padding-inline: 25px;
    padding-block: 18px;
    outline: none;
    border: 0;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
  }

  input::placeholder {
    color: var(----Dark_gray);
  }

  #map {
	  height: 100%;
	  width: 100%;
	  min-height: 300px;
  }
`;

export default GlobalStyle;
