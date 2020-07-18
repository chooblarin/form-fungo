import React from "react";

type PasswordInputType = "password" | "text";

type TogglePasswordButtonProps = {
  passwordInputType: PasswordInputType;
  onClick: () => void;
};

export const TogglePasswordButton: React.FC<TogglePasswordButtonProps> = ({
  passwordInputType,
  onClick,
}) => {
  return (
    <>
      <button
        id="toggle-password"
        // Set type as "button" because the default type for a button in a form is "submit".
        type="button"
        aria-label={
          passwordInputType === "password"
            ? "Show password as plain text. Warning: this will display your password on the screen."
            : "Hide password."
        }
        onClick={onClick}
      >
        {passwordInputType === "password" ? "Show password" : "Hide password"}
      </button>
      <style jsx>{`
        #toggle-password {
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 300;
          padding: 0;
          /* Display at the top right of the password section */
          position: absolute;
          top: -4px;
          right: -2px;
        }
      `}</style>
    </>
  );
};
