import React from "react";
import { NutritionData } from "@/types";
import NutritionValueDisplay from "../atoms/NutritionValueDisplay";
import SectionTitle from "../atoms/SectionTitle";

interface NutritionSummaryProps {
  totals: NutritionData;
}

const NutritionSummary: React.FC<NutritionSummaryProps> = ({ totals }) => (
  <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6 sticky top-4">
    <SectionTitle>Nutrition Summary</SectionTitle>
    <NutritionValueDisplay
      label="Calories"
      value={totals.calories}
      unit=""
      highlighted={true}
    />
    <div className="space-y-0 mt-2">
      <NutritionValueDisplay label="Protein" value={totals.protein} />
      <NutritionValueDisplay label="Carbohydrates" value={totals.carbs} />
      <NutritionValueDisplay label="Fat" value={totals.fat} />
      <NutritionValueDisplay label="Fiber" value={totals.fiber} />
      <NutritionValueDisplay label="Sugar" value={totals.sugar} />
    </div>
  </div>
);

export default NutritionSummary;
