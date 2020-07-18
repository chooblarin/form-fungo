import Head from "next/head";
import Link from "next/link";

export const Home = (): JSX.Element => {
  return (
    <div className="container">
      <Head>
        <title>Form fungo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          <li>
            <Link href="/sign-in">Sign-in form example</Link>
          </li>
          <li>Credit card example</li>
          <li>Auto fill example</li>
          <li>Inclusive gender example</li>
        </ul>
      </main>

      <footer></footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
export default Home;
