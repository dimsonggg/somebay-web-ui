import styled from "styled-components";

const SomebayGlobalFonts = styled.style`
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400&display=swap');

  @font-face {
    font-family: "Behind Content";
    font-weight: bold;
    src: url("../fonts/bc_somebay/woff2/BehindContent-Bold.woff2") format("woff2"),
    url("../fonts/bc_somebay/woff/BehindContent-Bold.woff") format("woff");
  }

  @font-face {
    font-family: "Behind Content";
    font-weight: normal;
    src: url("../fonts/bc_somebay/woff2/BehindContent-Normal.woff2") format("woff2"),
    url("../fonts/bc_somebay/woff/BehindContent-Normal.woff") format("woff");
  }

  @font-face {
    font-family: "Behind Content";
    font-weight: 500;
    src: url("../fonts/bc_somebay/woff2/BehindContent-Medium.woff2") format("woff2"),
    url("../fonts/bc_somebay/woff/BehindContent-Medium.woff") format("woff");
  }
`
// const SomebayGlobalFonts = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400&display=swap');
//
//   @font-face {
//     font-family: "Behind Content";
//     font-weight: bold;
//     src: url(${BehindContentBoldWoff2}) format("woff2"),
//     url(${BehindContentBoldWoff}) format("woff");
//   }
//
//   @font-face {
//     font-family: "Behind Content";
//     font-weight: normal;
//     src: url("../fonts/bc_somebay/woff2/BehindContent-Normal.woff2") format("woff2"),
//     url("../fonts/bc_somebay/woff/BehindContent-Normal.woff") format("woff");
//   }
//
//   @font-face {
//     font-family: "Behind Content";
//     font-weight: 500;
//     src: url("../fonts/bc_somebay/woff2/BehindContent-Medium.woff2") format("woff2"),
//     url("../fonts/bc_somebay/woff/BehindContent-Medium.woff") format("woff");
//   }
// `;

export default SomebayGlobalFonts;