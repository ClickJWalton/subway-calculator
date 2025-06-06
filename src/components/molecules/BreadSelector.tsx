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
  <div className="bg-white rounded-lg shadow-md p-6">
    <SectionTitle>Bread</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {Object.keys(NUTRITIONAL_DATA.breads).map((bread) => (
        <RadioButton
          key={bread}
          id={`bread-${bread}`}
          name="bread"
          value={bread}
          checked={selectedBread === bread}
          onChange={onBreadChange}
          label={bread}
          className="p-2 rounded hover:bg-gray-50"
        />
      ))}
    </div>
  </div>
);

export default BreadSelector;
