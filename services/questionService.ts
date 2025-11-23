import { Question } from "@/types/category";
import { mockQuestions } from "@/data/mockQuestions";

export async function getQuestionsByTopic(
  topicId: string
): Promise<Question[]> {
  const filteredQuestions = mockQuestions.filter(
    (question) => question.topicId === topicId
  );
  return filteredQuestions;
}

export async function getQuestionById(
  questionId: string
): Promise<Question | null> {
  const question = mockQuestions.find((q) => q.id === questionId) || null;
  return question;
}

export async function getTotalQuestionCountByTechnology(
  technologyId: string,
  topicIds: string[]
): Promise<number> {
  const questions = mockQuestions.filter((question) =>
    topicIds.includes(question.topicId)
  );
  return questions.length;
}
