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
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default App;
