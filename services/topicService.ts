import { Topic } from "@/types/category";
import { mockTopics } from "@/data/mockTopics";

export async function getTopicsByTechnology(
  technologyId: string
): Promise<Topic[]> {
  const filteredTopics = mockTopics.filter(
    (topic) => topic.technologyId === technologyId
  );
  return filteredTopics;
}

export async function getTopicById(topicId: string): Promise<Topic | null> {
  const topic = mockTopics.find((t) => t.id === topicId) || null;
  return topic;
}
