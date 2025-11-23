import { Technology } from "@/types/category";
import { mockTechnologies } from "@/data/mockTechnologies";

/**
 * Получить технологии по категории
 * TODO: Заменить на реальный fetch запрос к бэкенду
 * @param categoryId - ID категории
 * @returns Promise с массивом технологий для указанной категории
 */
export async function getTechnologiesByCategory(
  categoryId: string
): Promise<Technology[]> {
  
  //Фильтр списка категрий по ID категории
  const technologies = mockTechnologies.filter(
    (tech) => tech.categoryId === categoryId
  );

  return technologies;
}

/**
 * Получить все технологии
 * TODO: Заменить на реальный fetch запрос к бэкенду
 * @returns Promise с массивом всех технологий
 */
export async function getAllTechnologies(): Promise<Technology[]> {
  return mockTechnologies;
}

/**
 * Получить технологию по ID
 * TODO: Заменить на реальный fetch запрос к бэкенду
 * @param id - ID технологии
 * @returns Promise с технологией или undefined если не найдена
 */
export async function getTechnologyById(
  id: string
): Promise<Technology | undefined> {
 //get technology by id from mock data

  return mockTechnologies.find((tech) => tech.id === id);
}