"use client";

import { useState, useEffect } from "react";
import { Category } from "@/types/category";
import { getCategories } from "@/services/categoryService";
import TabButton from "./TabButton";

interface CategoryTabsProps {
  onCategorySelect?: (categoryId: string) => void;
}

export default function CategoryTabs({ onCategorySelect }: CategoryTabsProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };

    loadCategories();
  }, []);

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
