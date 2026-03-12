import React from "react";
import CheckBox from "../atoms/CheckBox";
import SectionTitle from "../atoms/SectionTitle";

interface CategorySelectorProps {
  title: string;
  items: Record<string, any>;
  selectedItems: string[];
  onItemChange: (item: string) => void;
  maxHeight?: boolean;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  title,
  items,
  selectedItems,
  onItemChange,
  maxHeight = false,
}) => (
  <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6">
    <SectionTitle>{title}</SectionTitle>
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-1 ${
        maxHeight ? "subway-scroll max-h-52 overflow-y-auto pr-1" : ""
      }`}
    >
      {Object.keys(items).map((item) => (
        <CheckBox
          key={item}
          id={`${title.toLowerCase()}-${item}`}
          checked={selectedItems.includes(item)}
          onChange={() => onItemChange(item)}
          label={item}
        />
      ))}
    </div>
  </div>
);

export default CategorySelector;
