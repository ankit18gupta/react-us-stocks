import { ArticleListProps } from "../../models/types";
import Article from "./Article";
import "./ArticleList.scss";

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <>
      {articles?.length! > 0 &&
        articles?.map((article) => (
          <Article {...article} key={article.title} />
        ))}
    </>
  );
};

export default ArticleList;
