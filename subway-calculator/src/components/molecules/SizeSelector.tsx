import React from "react";
import { SandwichSize } from "@/types";
import RadioButton from "../atoms/RadioButton";
import SectionTitle from "../atoms/SectionTitle";

interface SizeSelectorProps {
  selectedSize: SandwichSize;
  onSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  selectedSize,
  onSizeChange,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <SectionTitle>Size</SectionTitle>
    <div className="flex gap-4">
      <RadioButton
        id="size-6inch"
        name="size"
        value="6inch"
        checked={selectedSize === "6inch"}
        onChange={onSizeChange}
        label="6 inch"
      />
      <RadioButton
        id="size-footlong"
        name="size"
        value="footlong"
        checked={selectedSize === "footlong"}
        onChange={onSizeChange}
        label="Footlong"
      />
    </div>
  </div>
);

export default SizeSelector;
