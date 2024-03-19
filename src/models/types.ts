export interface ListProps {
  list?: string[];
  onFilterChange: (arg: string) => void;
}

export interface FilterListProps {
  categories?: string[];
  authors?: string[];
  onCategoryFilterChange: (arg: string) => void;
  onAuthorFilterChange: (arg: string) => void;
}

export interface SortingOptionProps {
  onSortingOptionChange: (arg: string) => void;
}

export interface ArticleProps {
  author?: string;
  body?: string;
  date?: string;
  image?: string;
  source?: string;
  title?: string;
  url?: string;
  showArticle?: boolean;
}

export interface ArticleListProps {
  articles?: ArticleProps[];
  articlesToDisplay?: ArticleProps[];
}

export interface PaginationProps {
  articles?: ArticleProps[];
  onPageChange: (arg: ArticleProps[]) => void;
}
