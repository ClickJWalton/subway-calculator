import React from "react";

interface NutritionValueDisplayProps {
  label: string;
  value: number | string;
  unit?: string;
  highlighted?: boolean;
}

const NutritionValueDisplay: React.FC<NutritionValueDisplayProps> = ({
  label,
  value,
  unit = "g",
  highlighted = false,
}) => {
  if (highlighted) {
    return (
      <div className="flex justify-between items-center p-4 bg-[#FFC72C] rounded-xl mb-2">
        <span className="font-black text-[#111111] text-base uppercase tracking-wide">
          {label}
        </span>
        <span className="text-3xl font-black text-[#111111]">{value}</span>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center py-2.5 border-b border-[#2a2a2a]">
      <span className="text-gray-400 text-sm">{label}</span>
      <span className="font-semibold text-white text-sm">
        {value}
        {unit}
      </span>
    </div>
  );
};

export default NutritionValueDisplay;
