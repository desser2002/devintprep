"use client";

import CategoryTabs from "@/components/CategoryTabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryTabs
        onCategorySelect={(categoryId) => {
          console.log("Selected category:", categoryId);
        }}
      />
    </div>
  );
}
