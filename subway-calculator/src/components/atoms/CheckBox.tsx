"use client";

import React from "react";

interface CheckBoxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  checked,
  onChange,
  label,
  className = "",
}) => (
  <label className={`flex items-center cursor-pointer ${className}`}>
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="mr-2"
    />
    <span className="text-gray-700 text-sm">{label}</span>
  </label>
);

export default CheckBox;
