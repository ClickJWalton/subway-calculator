import React from "react";
import { SandwichSize } from "@/types";
import SectionTitle from "../atoms/SectionTitle";

interface SizeSelectorProps {
  selectedSize: SandwichSize;
  onSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  selectedSize,
  onSizeChange,
}) => (
  <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6">
    <SectionTitle>Size</SectionTitle>
    <div className="flex gap-3">
      {(["6inch", "footlong"] as SandwichSize[]).map((size) => (
        <label
          key={size}
          className={`flex-1 cursor-pointer text-center py-3 px-4 rounded-lg border-2 font-bold transition-all text-sm ${
            selectedSize === size
              ? "border-[#008C15] bg-[#008C15] text-white"
              : "border-[#2a2a2a] bg-[#111] text-gray-400 hover:border-[#444] hover:text-gray-200"
          }`}
        >
          <input
            type="radio"
            name="size"
            value={size}
            checked={selectedSize === size}
            onChange={onSizeChange}
            className="sr-only"
          />
          {size === "6inch" ? "6 Inch" : "Footlong"}
        </label>
      ))}
    </div>
  </div>
);

export default SizeSelector;
