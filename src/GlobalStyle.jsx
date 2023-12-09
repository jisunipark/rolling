import { createGlobalStyle } from 'styled-components';
import PretendardWoff from './assets/fonts/pretendard/woff/Pretendard-Black.woff';
import PretendardWoff2 from './assets/fonts/pretendard/woff2/Pretendard-Black.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src: local('Pretendard Black'), url(${PretendardWoff2}) format('woff2'), url(${PretendardWoff}) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: local('Pretendard ExtraBold'), url(./assets/fonts/pretendard/woff2/Pretendard-ExtraBold.woff2) format('woff2'), url(./assets/fonts/pretendard/woff/Pretendard-ExtraBold.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'), url(./assets/fonts/pretendard/woff2/Pretendard-Bold.woff2) format('woff2'), url(./assets/fonts/pretendard/woff/Pretendard-Bold.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: local('Pretendard SemiBold'), url(./assets/fonts/pretendard/woff2/Pretendard-SemiBold.woff2) format('woff2'), url(./assets/fonts/pretendard/woff/Pretendard-SemiBold.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'), url(./assets/fonts/pretendard/woff2/Pretendard-Medium.woff2) format('woff2'), url(./assets/fonts/pretendard/woff/Pretendard-Medium.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'), url(./assets/fonts/pretendard/woff2/Pretendard-Regular.woff2) format('woff2'), url(./assets/fonts/pretendard/woff/Pretendard-Regular.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: local('Pretendard Light'), url(./assets/fonts/pretendard/woff2/Pretendard-Light.woff2) format('woff2'), url(./assets/fonts/pretendard/woff/Pretendard-Light.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: local('Pretendard ExtraLight'), url(./assets/fonts/pretendard/woff2/Pretendard-ExtraLight.woff2) format('woff2'), url(./assets/fonts/pretendard/woff/Pretendard-ExtraLight.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: local('Pretendard Thin'), url(./assets/fonts/pretendard/woff2/Pretendard-Thin.woff2) format('woff2'), url(./assets/fonts/pretendard/woff/Pretendard-Thin.woff) format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html,
  body {
    min-height: 100%;
    min-height: 100svh;
    line-height: 1;
    font-family: Pretendard, sans-serif;
  }

  image {
    vertical-align:top;
  }

  ul, li, ol {
    list-style:none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
