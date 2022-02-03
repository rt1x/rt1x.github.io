import * as React from "react"
import { Global, css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";

// styles
const globalStyles = css`
  body {
    background-color: #111111;
  }
`;
const pageStyles = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontFamily: "Menlo, monospace",
};

const headingStyles = {
  fontSize: "2.5rem",
};

const paragraphStyles = {};

const footerStyles = {
  marginTop: "3rem",
  fontSize: "0.8rem",
  color: "#777",
};

// markup
const IndexPage = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <main style={pageStyles}>
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
        <h1 style={headingStyles}>rt1x</h1>
        <p style={paragraphStyles}>Data Engineering Solutions</p>
        <p style={footerStyles}>
          (주)알티원엑스 (대표 박영훈)
          <br />
          서울특별시 서초구 강남대로 354 혜천빌딩 1203호
        </p>
      </main>
    </>
  );
};

export default IndexPage
