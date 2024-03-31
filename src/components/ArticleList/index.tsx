import { useAppSelector } from "../../hooks";
import Article from "./Article";
import "./ArticleList.scss";

const ArticleList = () => {
  const articles = useAppSelector(
    (state) => state.articlesSlice.filteredArticles
  );
  const activePageArticles = useAppSelector(
    (state) => state.articlesSlice.activePageArticles
  );

  // Updated articles to show on current page
  const updatedArticles = articles.map((article) => ({
    ...article,
    showArticle: activePageArticles.includes(article),
  }));

  return (
    <div className="article-list-wrapper" data-testid="article-list-wrapper">
      {updatedArticles.length > 0 &&
        updatedArticles.map((article) => (
          <Article {...article} key={article.title} />
        ))}
    </div>
  );
};

export default ArticleList;
