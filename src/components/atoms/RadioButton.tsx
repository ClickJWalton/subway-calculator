"use client";

import React from "react";

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  className = "",
}) => (
  <label
    className={`flex items-center gap-3 cursor-pointer group rounded-lg px-2 py-2 transition-colors ${
      checked ? "bg-[#008C15]/10" : "hover:bg-[#222]"
    } ${className}`}
  >
    <input
      id={id}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <div
      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
        checked
          ? "border-[#008C15] bg-[#008C15]"
          : "border-[#444] group-hover:border-[#666]"
      }`}
    >
      {checked && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
    </div>
    <span
      className={`text-sm transition-colors ${
        checked
          ? "text-white font-medium"
          : "text-gray-400 group-hover:text-gray-200"
      }`}
    >
      {label}
    </span>
  </label>
);

export default RadioButton;
