import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        :root {
          --desktop-font-size: 16px;
          --mobile-font-size: 22px;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        ul[class],
        ol[class] {
          padding: 0;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        p,
        ul[class],
        ol[class],
        li,
        figure,
        figcaption,
        blockquote,
        dl,
        dd {
          margin: 0;
        }

        body {
          min-height: 100vh;
          scroll-behavior: smooth;
          text-rendering: optimizeSpeed;
          line-height: 1.5;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        ul[class],
        ol[class] {
          list-style: none;
        }
        img {
          max-width: 100%;
          display: block;
        }
        article > * + * {
          margin-top: 1em;
        }
        input,
        button,
        textarea,
        select {
          font: inherit;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </>
  );
}

export default App;
