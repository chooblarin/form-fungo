import Head from "next/head";
import { SignInForm } from "../components/sign-in/SignInForm";

const SignIn = (): JSX.Element => {
  return (
    <div className="container">
      <Head>
        <title>Form fungo | Sign-in form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Sign in</h1>
        <a href="#" className="password-reset">
          Forgot your password?
        </a>
        <SignInForm />
      </main>

      <footer></footer>
      <style jsx>{`
        main {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          padding: 16px;
        }
        .password-reset {
          display: inline-block;
          margin: 12px 0;
        }
      `}</style>
    </div>
  );
};

export default SignIn;
