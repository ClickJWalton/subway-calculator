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
  <div className="bg-white rounded-lg shadow-md p-6">
    <SectionTitle>{title}</SectionTitle>
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-2 ${
        maxHeight ? "max-h-48 overflow-y-auto" : ""
      }`}
    >
      {Object.keys(items).map((item) => (
        <CheckBox
          key={item}
          id={`${title.toLowerCase()}-${item}`}
          checked={selectedItems.includes(item)}
          onChange={() => onItemChange(item)}
          label={item}
          className="p-2 rounded hover:bg-gray-50"
        />
      ))}
    </div>
  </div>
);

export default CategorySelector;
