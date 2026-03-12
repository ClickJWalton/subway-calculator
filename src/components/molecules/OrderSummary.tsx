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
  <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6">
    <SectionTitle>Your Order</SectionTitle>
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 uppercase tracking-wider w-20 flex-shrink-0">Size</span>
        <span className="inline-block bg-[#008C15] text-white text-xs font-bold px-2.5 py-1 rounded-md">
          {sandwichSize === "6inch" ? "6 Inch" : "Footlong"}
        </span>
      </div>
      {selectedBread && (
        <div className="flex items-start gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">Bread</span>
          <span className="text-sm text-white">{selectedBread}</span>
        </div>
      )}
      {selectedProteins.length > 0 && (
        <div className="flex items-start gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">Proteins</span>
          <div className="flex flex-wrap gap-1">
            {selectedProteins.map((p) => (
              <span key={p} className="inline-block bg-[#008C15]/20 text-[#4ade80] text-xs px-2 py-0.5 rounded-md">{p}</span>
            ))}
            {doubleProtein && (
              <span className="inline-block bg-[#FFC72C]/20 text-[#FFC72C] text-xs font-bold px-2 py-0.5 rounded-md">×2</span>
            )}
          </div>
        </div>
      )}
      {selectedCheeses.length > 0 && (
        <div className="flex items-start gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">Cheese</span>
          <div className="flex flex-wrap gap-1">
            {selectedCheeses.map((c) => (
              <span key={c} className="inline-block bg-[#2a2a2a] text-gray-300 text-xs px-2 py-0.5 rounded-md">{c}</span>
            ))}
          </div>
        </div>
      )}
      {selectedVegetables.length > 0 && (
        <div className="flex items-start gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">Veggies</span>
          <div className="flex flex-wrap gap-1">
            {selectedVegetables.map((v) => (
              <span key={v} className="inline-block bg-[#2a2a2a] text-gray-300 text-xs px-2 py-0.5 rounded-md">{v}</span>
            ))}
          </div>
        </div>
      )}
      {selectedSauces.length > 0 && (
        <div className="flex items-start gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">Sauces</span>
          <div className="flex flex-wrap gap-1">
            {selectedSauces.map((s) => (
              <span key={s} className="inline-block bg-[#2a2a2a] text-gray-300 text-xs px-2 py-0.5 rounded-md">{s}</span>
            ))}
          </div>
        </div>
      )}
      {selectedToppings.length > 0 && (
        <div className="flex items-start gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">Toppings</span>
          <div className="flex flex-wrap gap-1">
            {selectedToppings.map((t) => (
              <span key={t} className="inline-block bg-[#2a2a2a] text-gray-300 text-xs px-2 py-0.5 rounded-md">{t}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default OrderSummary;
