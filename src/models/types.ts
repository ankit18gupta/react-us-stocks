export interface ArticleProps {
  author?: string;
  body?: string;
  date?: string;
  image?: string;
  source?: string;
  title?: string;
  url?: string;
  showArticle: boolean;
}

export interface ArticlesState {
  loading: boolean;
  error: string | null;
  articles: ArticleProps[];
  filteredArticles: ArticleProps[];
  selectedCategories: string[];
  selectedAuthors: string[];
  sortingOption: string;
  activePageNumber: number;
  activePageArticles: ArticleProps[];
}

export interface ListProps {
  list: string[];
  onFilterChange: (arg: string) => void;
}
