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
  <label
    className={`flex items-center gap-3 cursor-pointer group rounded-lg px-2 py-2 transition-colors ${
      checked ? "bg-[#008C15]/10" : "hover:bg-[#222]"
    } ${className}`}
  >
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <div
      className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
        checked
          ? "border-[#008C15] bg-[#008C15]"
          : "border-[#444] group-hover:border-[#666]"
      }`}
    >
      {checked && (
        <svg
          className="w-2.5 h-2.5 text-white"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
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

export default CheckBox;
