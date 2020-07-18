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
    <button
      id="toggle-password"
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
  );
};
