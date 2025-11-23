"use client";

import { useState, useEffect } from "react";
import { Technology } from "@/types/category";
import { getTechnologiesByCategory } from "@/services/technologyService";
import TechnologyButton from "./TechnologyButton";

interface TechnologyListProps {
  categoryId: string;
  onTechnologySelect?: (technologyId: string) => void;
}

export default function TechnologyList({ categoryId, onTechnologySelect }: TechnologyListProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTech, setSelectedTech] = useState<string>("");

  useEffect(() => {
    const loadTechnologies = async () => {
      if (!categoryId) {
        setTechnologies([]);
        return;
      }

      try {
        const data = await getTechnologiesByCategory(categoryId);
        setTechnologies(data);
        setSelectedTech("");
      } catch (error) {
        console.error("Failed to load technologies:", error);
        setTechnologies([]);
      }
    };

    loadTechnologies();
  }, [categoryId]);

  const handleTechClick = (techId: string) => {
    setSelectedTech(techId);
    if (onTechnologySelect) {
      onTechnologySelect(techId);
    }
  };

  if (!categoryId || technologies.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech: Technology) => (
            <TechnologyButton
              key={tech.id}
              label={tech.name}
              iconUrl={tech.iconUrl}
              isActive={selectedTech === tech.id}
              onClick={() => handleTechClick(tech.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
