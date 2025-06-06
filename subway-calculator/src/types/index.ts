export interface NutritionalDatabase {
  breads: Record<string, NutritionData>;
  proteins: Record<string, NutritionData>;
  cheeses: Record<string, NutritionData>;
  vegetables: Record<string, NutritionData>;
  sauces: Record<string, NutritionData>;
  toppings: Record<string, NutritionData>;
}

export interface NutritionData {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
}

export type SandwichSize = "6inch" | "footlong";
