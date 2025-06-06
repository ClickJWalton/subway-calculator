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
  <label className={`flex items-center cursor-pointer ${className}`}>
    <input
      id={id}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="mr-2"
    />
    <span className="text-gray-700">{label}</span>
  </label>
);

export default RadioButton;
