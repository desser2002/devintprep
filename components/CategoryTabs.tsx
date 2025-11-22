"use client";

import { useState } from "react";
import { Category } from "@/types/category";
import { categories } from "@/data/categories";
import TabButton from "./TabButton";

interface CategoryTabsProps {
  onCategorySelect?: (categoryId: string) => void;
}

export default function CategoryTabs({ onCategorySelect }: CategoryTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(categories[0].id);

  const handleTabClick = (categoryId: string) => {
    setActiveTab(categoryId);
    if (onCategorySelect) {
      onCategorySelect(categoryId);
    }
  };

  return (
    <div className="w-full bg-white">
      <div
        className="flex flex-wrap justify-center gap-3 p-4 max-w-7xl mx-auto"
        role="tablist"
      >
        {categories.map((category: Category) => (
          <TabButton
            key={category.id}
            label={category.label}
            isActive={activeTab === category.id}
            onClick={() => handleTabClick(category.id)}
          />
        ))}
      </div>
    </div>
  );
}
