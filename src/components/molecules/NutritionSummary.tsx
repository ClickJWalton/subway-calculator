import React from "react";
import { NutritionData } from "@/types";
import NutritionValueDisplay from "../atoms/NutritionValueDisplay";
import SectionTitle from "../atoms/SectionTitle";

interface NutritionSummaryProps {
  totals: NutritionData;
}

const NutritionSummary: React.FC<NutritionSummaryProps> = ({ totals }) => (
  <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
    <SectionTitle>Nutrition Summary</SectionTitle>
    <div className="space-y-3">
      <NutritionValueDisplay
        label="Calories"
        value={totals.calories}
        unit=""
        highlighted={true}
      />
      <NutritionValueDisplay label="Protein" value={totals.protein} />
      <NutritionValueDisplay label="Carbohydrates" value={totals.carbs} />
      <NutritionValueDisplay label="Fat" value={totals.fat} />
      <NutritionValueDisplay label="Fiber" value={totals.fiber} />
      <NutritionValueDisplay label="Sugar" value={totals.sugar} />
    </div>
  </div>
);

export default NutritionSummary;
