"use client";

import { useState } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import TechnologyList from "@/components/TechnologyList";
import TechnologyTopics from "@/components/TechnologyTopics";

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [selectedTechnologyId, setSelectedTechnologyId] = useState<string>("");

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setSelectedTechnologyId("");
  };

  const handleTechnologySelect = (technologyId: string) => {
    setSelectedTechnologyId(technologyId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryTabs onCategorySelect={handleCategorySelect} />
      <TechnologyList
        categoryId={selectedCategoryId}
        onTechnologySelect={handleTechnologySelect}
      />
      <TechnologyTopics selectedTechnologyId={selectedTechnologyId} />
    </div>
  );
}
