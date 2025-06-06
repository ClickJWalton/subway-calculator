import React from "react";
import { NUTRITIONAL_DATA } from "@/data/nutritional-data";
import CheckBox from "../atoms/CheckBox";
import SectionTitle from "../atoms/SectionTitle";

interface ProteinSelectorProps {
  selectedProteins: string[];
  doubleProtein: boolean;
  onProteinChange: (protein: string) => void;
  onDoubleProteinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProteinSelector: React.FC<ProteinSelectorProps> = ({
  selectedProteins,
  doubleProtein,
  onProteinChange,
  onDoubleProteinChange,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <SectionTitle>Proteins</SectionTitle>
    <div className="mb-4">
      <CheckBox
        id="double-protein"
        checked={doubleProtein}
        onChange={onDoubleProteinChange}
        label="Double Protein"
        className="font-medium"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto">
      {Object.keys(NUTRITIONAL_DATA.proteins).map((protein) => (
        <CheckBox
          key={protein}
          id={`protein-${protein}`}
          checked={selectedProteins.includes(protein)}
          onChange={() => onProteinChange(protein)}
          label={protein}
          className="p-2 rounded hover:bg-gray-50"
        />
      ))}
    </div>
  </div>
);

export default ProteinSelector;
