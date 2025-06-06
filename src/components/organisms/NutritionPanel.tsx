import React from "react";
import { NutritionData, SandwichSize } from "@/types";
import NutritionSummary from "../molecules/NutritionSummary";
import OrderSummary from "../molecules/OrderSummary";

interface NutritionPanelProps {
  totals: NutritionData;
  sandwichSize: SandwichSize;
  selectedBread: string;
  selectedProteins: string[];
  doubleProtein: boolean;
  selectedCheeses: string[];
  selectedVegetables: string[];
  selectedSauces: string[];
  selectedToppings: string[];
}

const NutritionPanel: React.FC<NutritionPanelProps> = ({
  totals,
  sandwichSize,
  selectedBread,
  selectedProteins,
  doubleProtein,
  selectedCheeses,
  selectedVegetables,
  selectedSauces,
  selectedToppings,
}) => (
  <div className="space-y-6">
    <NutritionSummary totals={totals} />
    <OrderSummary
      sandwichSize={sandwichSize}
      selectedBread={selectedBread}
      selectedProteins={selectedProteins}
      doubleProtein={doubleProtein}
      selectedCheeses={selectedCheeses}
      selectedVegetables={selectedVegetables}
      selectedSauces={selectedSauces}
      selectedToppings={selectedToppings}
    />
  </div>
);

export default NutritionPanel;
