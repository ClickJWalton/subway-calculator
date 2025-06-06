import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  type = "button",
  className = "",
  disabled = false,
}) => {
  const getVariantClasses = (): string => {
    switch (variant) {
      case "danger":
        return "bg-red-500 hover:bg-red-600 text-white";
      case "secondary":
        return "bg-gray-500 hover:bg-gray-600 text-white";
      case "primary":
      default:
        return "bg-green-500 hover:bg-green-600 text-white";
    }
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`font-bold py-2 px-6 rounded-lg transition-colors ${getVariantClasses()} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
