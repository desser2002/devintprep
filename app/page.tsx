"use client";

import { useState } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import TechnologyList from "@/components/TechnologyList";

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryTabs onCategorySelect={handleCategorySelect} />
      <TechnologyList categoryId={selectedCategoryId} />
    </div>
  );
}
