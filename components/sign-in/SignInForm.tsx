import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TogglePasswordButton } from "./TogglePasswordButton";

type PasswordInputType = "password" | "text";

export const SignInForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [passwordInputType, setPasswordInputType] = useState<PasswordInputType>(
    "password"
  );
  return (
    <form onSubmit={handleSubmit(() => alert("hello"))}>
      <section>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          ref={register({ required: "Email can't be blank" })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </section>

      <section>
        <label htmlFor="current-password">Password</label>
        <TogglePasswordButton
          passwordInputType={passwordInputType}
          onClick={() => {
            switch (passwordInputType) {
              case "password":
                setPasswordInputType("text");
                break;
              case "text":
                setPasswordInputType("password");
                break;
            }
          }}
        />
        <input
          id="current-password"
          name="currentPassword"
          type={passwordInputType}
          autoComplete="currentPassword"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck="false"
          ref={register({ required: "Password can't be blank" })}
        />
        {errors.currentPassword && (
          <p className="error">{errors.currentPassword.message}</p>
        )}
      </section>
      <button type="submit">Sign in</button>
      <style jsx>{`
        form {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
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
          width: 100%;
        }
        input[type="email"]:not(:focus):invalid,
        input[type="password"]:not(:focus):invalid {
          color: red;
          outline-color: red;
        }
        .error {
          color: #ab2c22;
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
        button:hover {
          background-color: #ccc;
          color: black;
        }
        button#sign-in {
          margin: 0px 0 0 0;
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
