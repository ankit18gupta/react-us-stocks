import { ArticleListProps } from "../../models/types";
import Article from "./Article";
import "./ArticleList.scss";

const ArticleList = ({ articles }: ArticleListProps) => (
  <div className="article-list-wrapper">
    {articles?.length! > 0 &&
      articles?.map((article) => <Article {...article} key={article.title} />)}
  </div>
);

export default ArticleList;
