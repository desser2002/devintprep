"use client";

import { useState, useEffect } from "react";
import { Technology, Topic } from "@/types/category";
import { getTechnologyById } from "@/services/technologyService";
import { getTopicsByTechnology } from "@/services/topicService";
import { getTotalQuestionCountByTechnology } from "@/services/questionService";
import ProgressBar from "./ProgressBar";
import TopicButton from "./TopicButton";
import QuestionList from "./QuestionList";

interface TechnologyTopicsProps {
  selectedTechnologyId: string;
}

export default function TechnologyTopics({
  selectedTechnologyId,
}: TechnologyTopicsProps) {
  const [technology, setTechnology] = useState<Technology | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      if (!selectedTechnologyId) {
        setTechnology(null);
        setTopics([]);
        setTotalQuestions(0);
        return;
      }

      try {
        const tech = await getTechnologyById(selectedTechnologyId);
        setTechnology(tech || null);

        const topicsData = await getTopicsByTechnology(selectedTechnologyId);
        setTopics(topicsData);

        const topicIds = topicsData.map((topic) => topic.id);
        const questionCount = await getTotalQuestionCountByTechnology(
          selectedTechnologyId,
          topicIds
        );
        setTotalQuestions(questionCount);
      } catch (error) {
        console.error("Failed to load technology data:", error);
        setTechnology(null);
        setTopics([]);
        setTotalQuestions(0);
      }
    };

    loadData();
  }, [selectedTechnologyId]);

  if (!selectedTechnologyId || !technology) {
    return null;
  }

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {technology.name}
            </h2>
            <span className="text-sm text-gray-600">
              {totalQuestions} {totalQuestions === 1 ? "question" : "questions"}
            </span>
          </div>
          <ProgressBar progress={technology.progress} />
        </div>

        <div className="space-y-6">
          {topics.map((topic) => (
            <div key={topic.id}>
              <TopicButton title={topic.title} />
              <QuestionList topicId={topic.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
