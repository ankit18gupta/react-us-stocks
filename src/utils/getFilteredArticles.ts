import { ArticleProps } from "../models/types";

const getFilteredArticles = (
  categories: string[],
  authors: string[],
  articles: ArticleProps[]
) => {
  let filtered = articles;

  if (categories.length > 0) {
    filtered = filtered.filter((article) =>
      categories.includes(article.source!)
    );
  }

  if (authors.length > 0) {
    filtered = filtered.filter((article) => authors.includes(article.author!));
  }

  return filtered;
};

export default getFilteredArticles;
