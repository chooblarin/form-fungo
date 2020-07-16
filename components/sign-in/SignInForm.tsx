import React from "react";

export const SignInForm: React.FC = () => {
  return (
    <form action="#">
      <h1 className="title">Form fungo</h1>
      <section>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="bachikoi@chooblarin.com"
          autoComplete="email"
          required={true}
        />
      </section>
      <section>
        <label htmlFor="current-password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required={true}
        />
      </section>
      <button type="submit">Sign in</button>
      <style jsx>{`
        form {
          margin: 0 auto;
          max-width: 500px;
        }
        h1 {
          border-bottom: 1px solid #ccc;
          font-size: 28px;
          font-weight: 600;
          margin: 0 0 20px 0;
          padding: 0 0 5px 0;
        }
        input {
          border: 1px solid #ccc;
          font-size: 22px; /* fallback */
          font-size: var(--mobile-font-size);
          padding: 15px;
          width: 90%; /* fallback */
          width: calc(100% - 30px); /* full width minus padding */
        }
        input[type="email"]:not(:focus):invalid,
        input[type="password"]:not(:focus):invalid {
          color: red;
          outline-color: red;
        }
        label {
          display: block;
          font-size: 20px;
          font-size: var(--mobile-font-size);
          font-weight: 500;
          margin: 0 0 3px 0;
        }
        form section {
          margin: 0 0 20px 0;
          position: relative; /* for password toggle positioning */
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