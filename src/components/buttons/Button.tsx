import React from "react";
import { motion } from "framer-motion";
import DotsLoading from "../ui/DotsLoading";
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "outlined" | "filled" | "outline-hover";
  color?: string;
  width?: string;
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = "filled",
  color = "red",
  disabled = false,
  width,
  isLoading,
  ...props
}: IButtonProps) => {
  let buttonStyles: React.CSSProperties = {
    padding: "0.5rem 1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "9999px",
    fontWeight: "600",
    cursor: disabled ? "not-allowed" : "pointer",
  };

  if (width) {
    buttonStyles.width = width;
  }

  switch (variant) {
    case "outlined":
      buttonStyles = {
        ...buttonStyles,
        borderWidth: "2px",
        borderColor: disabled ? "gray" : color,
        color: disabled ? "gray" : color,
        backgroundColor: "transparent",
        transition: "background-color 0.3s, color 0.3s",
      };

      if (!disabled) {
        buttonStyles = {
          ...buttonStyles,
          "&:hover": {
            backgroundColor: color,
            color: "white",
          },
        };
      }
      break;
    case "outline-hover":
      buttonStyles = {
        ...buttonStyles,
        borderWidth: "2px",
        borderColor: "white",
        color: "white",
        backgroundColor: color,
        transition: "background-color 0.3s, color 0.3s",
      };
      break;
    case "filled":
    default:
      buttonStyles = {
        ...buttonStyles,
        color: "white",
        backgroundColor: color,
        transition: "background-color 0.3s, color 0.3s",
      };
      break;
  }

  return (
    <motion.button
      style={buttonStyles}
      {...props}
      whileTap={{ scale: isLoading ? 1 : 0.9 }}
      // disabled={isLoading || props.disabled}
      disabled={isLoading}
      className={`min-w-[150px] min-h-10 ${
        variant === "outlined" ? `hover:bg-${color}-500` : ""
      } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {isLoading ? <span className="loader mr-2" /> : null}
      {children}
    </motion.button>
  );
};

export default Button;
