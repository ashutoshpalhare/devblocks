export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type Technology = "HTML" | "React" | "Tailwind CSS" | "JavaScript";

export interface UIComponent {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  technologies: Technology[];
  difficulty: Difficulty;
  /** Tailwind-based markup used both as live preview and as the HTML snippet. */
  preview: string;
  tags: string[];
  learn: string[];
  created_at: string;
}

export interface Template {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  technologies: Technology[];
  difficulty: Difficulty;
  preview: string;
  sections: string[];
}

export interface ProjectKit {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  technologies: Technology[];
  difficulty: Difficulty;
  pages: string[];
  components: string[];
  preview: string;
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  category: string;
  difficulty: Difficulty;
  content: string;
  code: string;
  challenge: string;
}

export interface AppUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  created_at: string;
}

export type FavoriteType = "component" | "template" | "project" | "lesson";

export interface Favorite {
  user_id: string;
  item_id: string;
  item_type: FavoriteType;
}
