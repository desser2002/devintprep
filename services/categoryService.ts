import { Category } from "@/types/category";
import { mockCategories } from "@/data/mockCategories";

/**
 * Получить все категории
 * TODO: Заменить на реальный fetch запрос к бэкенду
 * @returns Promise с массивом категорий
 */
export async function getCategories(): Promise<Category[]> {
  // Мок-данные
  return mockCategories;
}

/**
 * Получить категорию по ID
 * TODO: Заменить на реальный fetch запрос к бэкенду
 * @param id - ID категории
 * @returns Promise с категорией или undefined если не найдена
 */
export async function getCategoryById(id: string): Promise<Category | undefined> {
  // Мок-данные
  return mockCategories.find((category) => category.id === id);
}