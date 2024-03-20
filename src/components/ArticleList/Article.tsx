import { ArticleProps } from "../../models/types";
import { appConstants } from "../../utils/constants";

// Format date string to display in UI
const formatDate = (dateString: string) => {
  const dateObject = new Date(dateString);
  const month = dateObject.toLocaleString("en-US", { month: "long" });
  const year = dateObject.getFullYear();
  const formattedDate = `${month} ${dateObject.getDate()}, ${year}`;
  return formattedDate;
};

const Article = ({
  image,
  date,
  source,
  title,
  url,
  body,
  author,
  showArticle,
}: ArticleProps) => {
  const hideArticleClass: string = showArticle ? "" : "hide-article";

  return (
    <div className={`article ${hideArticleClass}`} data-testid="article">
      <div className="row">
        <div className="col-12 col-md-4 col-xl-2">
          {image && (
            <img
              src={image.replace(image, `${appConstants.API_DOMAIN}${image}`)}
              alt={title}
              className="article-image"
              data-testid="image"
            />
          )}
        </div>
        <div className="col-12 col-md-8 col-xl-10 article-content-header">
          <div className="row">
            <div className="col-7">
              {date && (
                <p className="article-date" data-testid="date">
                  {formatDate(date)}
                </p>
              )}
            </div>
            <div className="col-5">
              {source && (
                <p className="article-source" data-testid="category">
                  {source}
                </p>
              )}
            </div>
          </div>
          <div className="row">
            {title && url && (
              <a
                href={url}
                className="col-12 article-title"
                target="_blank"
                data-testid="title-link"
              >
                <p dangerouslySetInnerHTML={{ __html: title }} />
              </a>
            )}
          </div>
        </div>
      </div>
      {body && (
        <div
          className="col-12 article-body"
          dangerouslySetInnerHTML={{ __html: body }}
          data-testid="body"
        />
      )}
      {author && (
        <p className="article-author" data-testid="author">
          {author}
        </p>
      )}
    </div>
  );
};

export default Article;
