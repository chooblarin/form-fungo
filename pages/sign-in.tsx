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
        <SignInForm />
      </main>

      <footer></footer>
    </div>
  );
};

export default SignIn;
