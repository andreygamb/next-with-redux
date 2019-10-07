import 'normalize.css'
import { media, colors, fonts, dimensions, transitionColor } from 'utils/styles'

// @font-face {
//   font-family: 'Font name';
//   src: url('/static/fonts/font-name.woff') format('woff'),
//     url('/static/fonts/font-name.woff2') format('woff2');
//   font-style: normal;
// }

export default () => (
  <style global jsx>
    {`
      *,
      *:before,
      *:after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
      }

      html {
        width: 100%;
        height: 100%;
      }

      body {
        height: 100%;
        color: black;
        background-color: ${colors.background};
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
      }

      @media (min-width: ${dimensions.desktop}px) {
        body {
          min-width: 1000px;
        }
      }

      #__next {
        height: 100%;
      }

      a,
      a:visited {
        color: inherit;
        text-decoration: none;
        transition: ${transitionColor};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }

      b,
      strong {
        font-weight: bold;
      }

      img {
        max-width: 100%;
      }

      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${colors.nprogress};
      }

      #nprogress .peg {
        position: absolute;
        right: 0px;
        display: none;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${colors.nprogress}, 0 0 5px ${colors.nprogress};
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }

      #nprogress .spinner {
        position: fixed;
        z-index: 9999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      #nprogress .spinner-icon {
        width: 24px;
        height: 24px;
        border: solid 2px transparent;
        border-top-color: ${colors.nprogress};
        border-left-color: ${colors.nprogress};
        border-radius: 50%;
        animation: nprogress-spinner 400ms linear infinite;
      }

      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}
  </style>
)
