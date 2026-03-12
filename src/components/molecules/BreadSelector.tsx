import React from "react";
import { NUTRITIONAL_DATA } from "@/data/nutritional-data";
import RadioButton from "../atoms/RadioButton";
import SectionTitle from "../atoms/SectionTitle";

interface BreadSelectorProps {
  selectedBread: string;
  onBreadChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BreadSelector: React.FC<BreadSelectorProps> = ({
  selectedBread,
  onBreadChange,
}) => (
  <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6">
    <SectionTitle>Bread</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      {Object.keys(NUTRITIONAL_DATA.breads).map((bread) => (
        <RadioButton
          key={bread}
          id={`bread-${bread}`}
          name="bread"
          value={bread}
          checked={selectedBread === bread}
          onChange={onBreadChange}
          label={bread}
        />
      ))}
    </div>
  </div>
);

export default BreadSelector;
