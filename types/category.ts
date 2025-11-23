export interface Category {
  id: string;
  label: string;
}

export interface Technology {
  id: string;
  name: string;
  iconUrl: string;
  categoryId: string;
  progress: number;
}

export interface Topic {
  id: string;
  technologyId: string;
  title: string;
}

export interface Question {
  id: string;
  topicId: string;
  title: string;
  isCodingChallenge: boolean;
}
