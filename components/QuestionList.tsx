"use client";

import { useState, useEffect } from "react";
import { Question } from "@/types/category";
import { getQuestionsByTopic } from "@/services/questionService";

interface QuestionListProps {
  topicId: string;
}

export default function QuestionList({ topicId }: QuestionListProps) {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const loadQuestions = async () => {
      if (!topicId) {
        setQuestions([]);
        return;
      }

      try {
        const data = await getQuestionsByTopic(topicId);
        setQuestions(data);
      } catch (error) {
        console.error("Failed to load questions:", error);
        setQuestions([]);
      }
    };

    loadQuestions();
  }, [topicId]);

  if (!topicId || questions.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 space-y-2">
      {questions.map((question) => (
        <div
          key={question.id}
          className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-medium text-gray-900 flex-1">
              {question.title}
            </h3>
            {question.isCodingChallenge ? (
              <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full whitespace-nowrap">
                Coding
              </span>
            ) : (
              <span className="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full whitespace-nowrap">
                Theory
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
