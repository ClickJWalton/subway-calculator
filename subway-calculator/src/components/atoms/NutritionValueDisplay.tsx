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
      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
        <span className="font-semibold text-green-800">{label}</span>
        <span className="text-xl font-bold text-green-800">{value}</span>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold text-gray-600">
        {value}
        {unit}
      </span>
    </div>
  );
};

export default NutritionValueDisplay;
