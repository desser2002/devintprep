"use client";

import { useState } from "react";
import Link from "next/link";
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

      {/* Floating Action Button */}
      <Link
        href="/add-question"
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center group"
        title="Add New Question"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </Link>
    </div>
  );
}
