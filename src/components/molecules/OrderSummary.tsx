import React from "react";
import { SandwichSize } from "@/types";
import SectionTitle from "../atoms/SectionTitle";

interface OrderSummaryProps {
  sandwichSize: SandwichSize;
  selectedBread: string;
  selectedProteins: string[];
  doubleProtein: boolean;
  selectedCheeses: string[];
  selectedVegetables: string[];
  selectedSauces: string[];
  selectedToppings: string[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  sandwichSize,
  selectedBread,
  selectedProteins,
  doubleProtein,
  selectedCheeses,
  selectedVegetables,
  selectedSauces,
  selectedToppings,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <SectionTitle>Your Order</SectionTitle>
    <div className="space-y-2 text-sm text-gray-800">
      <div>
        <strong>Size:</strong>{" "}
        {sandwichSize === "6inch" ? "6 inch" : "Footlong"}
      </div>
      {selectedBread && (
        <div>
          <strong>Bread:</strong> {selectedBread}
        </div>
      )}
      {selectedProteins.length > 0 && (
        <div>
          <strong>Proteins:</strong> {selectedProteins.join(", ")}
          {doubleProtein && (
            <span className="text-green-600 font-semibold"> (Double)</span>
          )}
        </div>
      )}
      {selectedCheeses.length > 0 && (
        <div>
          <strong>Cheese:</strong> {selectedCheeses.join(", ")}
        </div>
      )}
      {selectedVegetables.length > 0 && (
        <div>
          <strong>Vegetables:</strong> {selectedVegetables.join(", ")}
        </div>
      )}
      {selectedSauces.length > 0 && (
        <div>
          <strong>Sauces:</strong> {selectedSauces.join(", ")}
        </div>
      )}
      {selectedToppings.length > 0 && (
        <div>
          <strong>Toppings:</strong> {selectedToppings.join(", ")}
        </div>
      )}
    </div>
  </div>
);

export default OrderSummary;
