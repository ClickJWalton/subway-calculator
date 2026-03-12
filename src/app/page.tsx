// src/components/pages/SubwayCalculator.tsx
"use client";

import React, { useState, useEffect } from "react";
import { NUTRITIONAL_DATA } from "@/data/nutritional-data";
import { NutritionData, SandwichSize } from "@/types";
import { Footer, Header, NutritionPanel, SandwichBuilder } from "@/components";

const SubwayCalculator: React.FC = () => {
  const [sandwichSize, setSandwichSize] = useState<SandwichSize>("6inch");
  const [selectedBread, setSelectedBread] = useState<string>("");
  const [selectedProteins, setSelectedProteins] = useState<string[]>([]);
  const [doubleProtein, setDoubleProtein] = useState<boolean>(false);
  const [selectedCheeses, setSelectedCheeses] = useState<string[]>([]);
  const [selectedVegetables, setSelectedVegetables] = useState<string[]>([]);
  const [selectedSauces, setSelectedSauces] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [totals, setTotals] = useState<NutritionData>({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
  });

  const calculateTotals = (): void => {
    const newTotals: NutritionData = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      sugar: 0,
    };
    const multiplier: number = sandwichSize === "footlong" ? 2 : 1;

    // Helper function to add nutrition data
    const addNutritionData = (
      nutritionData: NutritionData,
      itemMultiplier: number = 1
    ): void => {
      Object.keys(newTotals).forEach((key) => {
        const nutritionKey = key as keyof NutritionData;
        newTotals[nutritionKey] +=
          nutritionData[nutritionKey] * multiplier * itemMultiplier;
      });
    };

    // Bread
    if (selectedBread && NUTRITIONAL_DATA.breads[selectedBread]) {
      addNutritionData(NUTRITIONAL_DATA.breads[selectedBread]);
    }

    // Proteins
    selectedProteins.forEach((protein) => {
      if (NUTRITIONAL_DATA.proteins[protein]) {
        const proteinMultiplier: number = doubleProtein ? 2 : 1;
        addNutritionData(NUTRITIONAL_DATA.proteins[protein], proteinMultiplier);
      }
    });

    // Cheeses
    selectedCheeses.forEach((cheese) => {
      if (NUTRITIONAL_DATA.cheeses[cheese]) {
        addNutritionData(NUTRITIONAL_DATA.cheeses[cheese]);
      }
    });

    // Vegetables
    selectedVegetables.forEach((vegetable) => {
      if (NUTRITIONAL_DATA.vegetables[vegetable]) {
        addNutritionData(NUTRITIONAL_DATA.vegetables[vegetable]);
      }
    });

    // Sauces
    selectedSauces.forEach((sauce) => {
      if (NUTRITIONAL_DATA.sauces[sauce]) {
        addNutritionData(NUTRITIONAL_DATA.sauces[sauce]);
      }
    });

    // Toppings
    selectedToppings.forEach((topping) => {
      if (NUTRITIONAL_DATA.toppings[topping]) {
        addNutritionData(NUTRITIONAL_DATA.toppings[topping]);
      }
    });

    // Round to 1 decimal place
    Object.keys(newTotals).forEach((key) => {
      const nutritionKey = key as keyof NutritionData;
      newTotals[nutritionKey] = Math.round(newTotals[nutritionKey] * 10) / 10;
    });

    setTotals(newTotals);
  };

  useEffect(() => {
    calculateTotals();
  }, [
    sandwichSize,
    selectedBread,
    selectedProteins,
    doubleProtein,
    selectedCheeses,
    selectedVegetables,
    selectedSauces,
    selectedToppings,
  ]);

  // Helper function to toggle array items
  const toggleArrayItem = <T,>(array: T[], item: T): T[] =>
    array.includes(item)
      ? array.filter((arrayItem) => arrayItem !== item)
      : [...array, item];

  const handleProteinChange = (protein: string): void => {
    setSelectedProteins((prev) => toggleArrayItem(prev, protein));
  };

  const handleCheeseChange = (cheese: string): void => {
    setSelectedCheeses((prev) => toggleArrayItem(prev, cheese));
  };

  const handleVegetableChange = (vegetable: string): void => {
    setSelectedVegetables((prev) => toggleArrayItem(prev, vegetable));
  };

  const handleSauceChange = (sauce: string): void => {
    setSelectedSauces((prev) => toggleArrayItem(prev, sauce));
  };

  const handleToppingChange = (topping: string): void => {
    setSelectedToppings((prev) => toggleArrayItem(prev, topping));
  };

  const resetCalculator = (): void => {
    setSandwichSize("6inch");
    setSelectedBread("");
    setSelectedProteins([]);
    setDoubleProtein(false);
    setSelectedCheeses([]);
    setSelectedVegetables([]);
    setSelectedSauces([]);
    setSelectedToppings([]);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSandwichSize(e.target.value as SandwichSize);
  };

  const handleBreadChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedBread(e.target.value);
  };

  const handleDoubleProteinChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDoubleProtein(e.target.checked);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <div className="p-4 pt-10">
        <div className="max-w-6xl mx-auto">
          <Header />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SandwichBuilder
              sandwichSize={sandwichSize}
              selectedBread={selectedBread}
              selectedProteins={selectedProteins}
              doubleProtein={doubleProtein}
              selectedCheeses={selectedCheeses}
              selectedVegetables={selectedVegetables}
              selectedSauces={selectedSauces}
              selectedToppings={selectedToppings}
              onSizeChange={handleSizeChange}
              onBreadChange={handleBreadChange}
              onProteinChange={handleProteinChange}
              onDoubleProteinChange={handleDoubleProteinChange}
              onCheeseChange={handleCheeseChange}
              onVegetableChange={handleVegetableChange}
              onSauceChange={handleSauceChange}
              onToppingChange={handleToppingChange}
              onReset={resetCalculator}
            />

            <NutritionPanel
              totals={totals}
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SubwayCalculator;
