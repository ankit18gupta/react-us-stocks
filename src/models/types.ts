export interface ArticleProps {
  author?: string;
  body?: string;
  date?: string;
  image?: string;
  source?: string;
  title?: string;
  url?: string;
}

export interface ArticleListProps {
  articles?: ArticleProps[];
}
