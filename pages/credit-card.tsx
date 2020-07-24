import Head from "next/head";
import { CreditCardForm } from "../components/credit-card/CreditCardForm";

const CreditCard = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Form fungo | Credit card form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">Credit card info</h1>
        <CreditCardForm />
      </main>
      <style jsx>{`
        main {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          padding: 16px;
        }
        h1 {
          margin: 0 0 16px 0;
        }
      `}</style>
    </div>
  );
};

export default CreditCard;
