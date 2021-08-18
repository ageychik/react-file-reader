import { createGlobalStyle } from 'styled-components';
import { font_family, font } from "./index";

const Base = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
    border: none;
    background: transparent;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: ${ font_family };
  }

  svg, img {
    max-width: 100%;
    max-height: 100%;
  }

  h1 {
    font-size: ${ font.h1.size };
    font-weight: ${ font.h1.weight }
  }

  h2 {
    font-size: ${ font.h2.size };
    font-weight: ${ font.h2.weight };
  }

  h3 {
    font-size: ${ font.h3.size };
    font-weight: ${ font.h3.weight };
  }

  h4 {
    font-size: ${ font.h4.size }px;
    font-weight: ${ font.h4.weight };
  }

  p {
    font-size: ${ font.primary.size }px;
  }

  a {
    font-size: ${ font.primary.size }px;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`

export const StylesGeneral = () => {
	return <Base />
}