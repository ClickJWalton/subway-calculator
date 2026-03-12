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
        return "bg-[#FFC72C] hover:bg-[#e6b225] text-[#111111]";
      case "secondary":
        return "bg-[#2a2a2a] hover:bg-[#333] text-white border border-[#3a3a3a]";
      case "primary":
      default:
        return "bg-[#008C15] hover:bg-[#006B10] text-white";
    }
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`font-bold py-2.5 px-8 rounded-lg transition-all text-sm tracking-wide ${getVariantClasses()} ${className} ${
        disabled ? "opacity-40 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
