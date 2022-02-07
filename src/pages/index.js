import * as React from "react";
import { Global, css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";

// styles
const globalStyles = css`
  body,
  html {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #111111;
  }
  * {
    box-sizing: border-box;
  }
`;
const pageStyles = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  font-family: "Menlo", "Monaco", "Consolas", "Courier New", monospace;
`;

const headingStyles = css`
  font-size: 2.5rem;
`;

const paragraphStyles = css`
  margin-top: -1rem;
  line-height: 2.5;
`;

const linkParagraphStyles = css`
  & > a {
    font-size: 0.85rem;
    color: #ccc;
    text-decoration: none;
    &:hover,
    &:active,
    &:visited {
      color: #ccc;
    }
    padding: 0.5rem 0.6rem;
    border-bottom: 1px solid #ccc;
    border-radius: 0.4rem;
    &:hover {
      background-color: #333;
    }
    &:active {
      background-color: #222;
    }
  }
`;

const footerStyles = css`
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #777;
`;

// markup
const IndexPage = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <main css={pageStyles}>
        <StaticImage
          src="../images/logo_transparent_white.png"
          placeholder="none"
          layout="fixed"
          width={200}
          height={200}
          quality={50}
          alt="rt1x"
        />
        <title>rt1x</title>
        <h1 css={headingStyles}>rt1x</h1>
        <p css={paragraphStyles}>Future Finance Builders</p>
        <p css={linkParagraphStyles}>
          <a href="mailto:contact@rt1x.dev" target="_blank" rel="noreferrer">
            contact@rt1x.dev
          </a>
        </p>
        <p css={footerStyles}>
          (주)알티원엑스 (대표 박영훈)
          <br />
          서울특별시 서초구 강남대로 354 혜천빌딩 1203호
        </p>
      </main>
    </>
  );
};

export default IndexPage;
