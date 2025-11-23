export interface Category {
  id: string;
  label: string;
}

export interface Technology {
  id: string;
  name: string;
  iconUrl: string;
  categoryId: string;
}
