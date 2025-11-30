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

export async function addQuestion(
  questionData: Omit<Question, "id">
): Promise<Question> {
  // Generate unique ID
  const newId = `q-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

  const newQuestion: Question = {
    id: newId,
    ...questionData,
  };

  // Add to mock data array
  mockQuestions.push(newQuestion);

  return newQuestion;
}
