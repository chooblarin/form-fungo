import React from "react";
import { useForm } from "react-hook-form";

export const CreditCardForm: React.FC = () => {
  const { handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(() => alert("submit"))}>
      <section>
        <label htmlFor="ccname">Name on card</label>
        <input
          id="ccname"
          name="cc-name"
          autoComplete="cc-name"
          required={true}
        />
      </section>

      <section>
        <label htmlFor="ccnumber">Card Number</label>
        <input
          id="ccnumber"
          name="card-number"
          type="text"
          pattern="[0-9]*"
          autoComplete="cc-number"
          required={true}
        />
      </section>

      <section>
        <label htmlFor="cvc">CVC</label>
        <input id="cvc" name="cvc" autoComplete="cc-csc" required={true} />
      </section>

      <section>
        <label htmlFor="ccexp">Expiry</label>
        <input
          id="ccexp"
          name="cc-exp"
          autoComplete="cc-exp"
          placeholder="MM-YYYY"
          required={true}
        />
      </section>
      <button type="submit">Confirm</button>
      <style jsx>{`
        form {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }
        input {
          border: 1px solid #ccc;
          font-size: 22px; /* fallback */
          font-size: var(--mobile-font-size);
          padding: 12px;
          width: 100%;
        }
        label {
          display: block;
          font-size: 20px;
          font-size: var(--mobile-font-size);
          margin: 0 0 4px 0;
        }
        button {
          background-color: #eee;
          border: 1px solid #ccc;
          border-radius: 2px;
          color: #444;
          cursor: pointer;
          display: block;
          font-size: 22px; /* fallback */
          font-size: var(--mobile-font-size);
          font-weight: 500;
          margin: 3px 0 0 0;
          padding: 10px;
        }
        @media (min-width: 450px) {
          input {
            font-size: 14px; /* fallback */
            font-size: var(--desktop-font-size);
          }
          label {
            font-size: 14px; /* fallback */
            font-size: var(--desktop-font-size);
          }
        }
      `}</style>
    </form>
  );
};
