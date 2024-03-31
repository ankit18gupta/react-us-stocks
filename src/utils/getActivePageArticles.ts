import { ArticleProps } from "../models/types";
import { appConstants } from "./constants";

const getActivePageArticles = (
  pageNumber: number,
  articles: ArticleProps[]
) => {
  let activePageArticles = articles;
  const articlesPerPage = appConstants.ARTICLES_PER_PAGE;
  const indexOfLastArticle = pageNumber * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  activePageArticles = activePageArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  return activePageArticles;
};

export default getActivePageArticles;
