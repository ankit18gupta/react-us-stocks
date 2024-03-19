import { ArticleListProps, ArticleProps } from "../../models/types";
import Article from "./Article";
import "./ArticleList.scss";

const ArticleList = ({ articles, articlesToDisplay }: ArticleListProps) => {
  const updatedArticles: ArticleProps[] | undefined = articles?.map(
    (article) => ({
      ...article,
      showArticle: articlesToDisplay?.includes(article),
    })
  );

  return (
    <div className="article-list-wrapper">
      {updatedArticles?.length! > 0 &&
        updatedArticles?.map((article) => (
          <Article {...article} key={article.title} />
        ))}
    </div>
  );
};

export default ArticleList;
