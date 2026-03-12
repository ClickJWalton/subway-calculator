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
  <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6">
    <SectionTitle>Proteins</SectionTitle>
    <div className="mb-3 p-1 rounded-lg border border-[#FFC72C]/20 bg-[#FFC72C]/5">
      <CheckBox
        id="double-protein"
        checked={doubleProtein}
        onChange={onDoubleProteinChange}
        label="Double Protein"
      />
    </div>
    <div className="subway-scroll grid grid-cols-1 md:grid-cols-2 gap-1 max-h-52 overflow-y-auto pr-1">
      {Object.keys(NUTRITIONAL_DATA.proteins).map((protein) => (
        <CheckBox
          key={protein}
          id={`protein-${protein}`}
          checked={selectedProteins.includes(protein)}
          onChange={() => onProteinChange(protein)}
          label={protein}
        />
      ))}
    </div>
  </div>
);

export default ProteinSelector;
