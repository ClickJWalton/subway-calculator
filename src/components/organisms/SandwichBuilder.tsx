import React from "react";
import { NUTRITIONAL_DATA } from "@/data/nutritional-data";
import { SandwichSize } from "@/types";
import SizeSelector from "../molecules/SizeSelector";
import BreadSelector from "../molecules/BreadSelector";
import ProteinSelector from "../molecules/ProteinSelector";
import CategorySelector from "../molecules/CategorySelector";
import Button from "../atoms/Button";

interface SandwichBuilderProps {
  sandwichSize: SandwichSize;
  selectedBread: string;
  selectedProteins: string[];
  doubleProtein: boolean;
  selectedCheeses: string[];
  selectedVegetables: string[];
  selectedSauces: string[];
  selectedToppings: string[];
  onSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBreadChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onProteinChange: (protein: string) => void;
  onDoubleProteinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheeseChange: (cheese: string) => void;
  onVegetableChange: (vegetable: string) => void;
  onSauceChange: (sauce: string) => void;
  onToppingChange: (topping: string) => void;
  onReset: () => void;
}

const SandwichBuilder: React.FC<SandwichBuilderProps> = ({
  sandwichSize,
  selectedBread,
  selectedProteins,
  doubleProtein,
  selectedCheeses,
  selectedVegetables,
  selectedSauces,
  selectedToppings,
  onSizeChange,
  onBreadChange,
  onProteinChange,
  onDoubleProteinChange,
  onCheeseChange,
  onVegetableChange,
  onSauceChange,
  onToppingChange,
  onReset,
}) => (
  <div className="lg:col-span-2 space-y-6">
    <SizeSelector selectedSize={sandwichSize} onSizeChange={onSizeChange} />

    <BreadSelector
      selectedBread={selectedBread}
      onBreadChange={onBreadChange}
    />

    <ProteinSelector
      selectedProteins={selectedProteins}
      doubleProtein={doubleProtein}
      onProteinChange={onProteinChange}
      onDoubleProteinChange={onDoubleProteinChange}
    />

    <CategorySelector
      title="Cheese"
      items={NUTRITIONAL_DATA.cheeses}
      selectedItems={selectedCheeses}
      onItemChange={onCheeseChange}
    />

    <CategorySelector
      title="Vegetables"
      items={NUTRITIONAL_DATA.vegetables}
      selectedItems={selectedVegetables}
      onItemChange={onVegetableChange}
      maxHeight={true}
    />

    <CategorySelector
      title="Sauces"
      items={NUTRITIONAL_DATA.sauces}
      selectedItems={selectedSauces}
      onItemChange={onSauceChange}
    />

    <CategorySelector
      title="Toppings"
      items={NUTRITIONAL_DATA.toppings}
      selectedItems={selectedToppings}
      onItemChange={onToppingChange}
    />

    <div className="text-center">
      <Button onClick={onReset} variant="danger">
        Reset Calculator
      </Button>
    </div>
  </div>
);

export default SandwichBuilder;
