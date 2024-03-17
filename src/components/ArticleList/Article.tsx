import { ArticleProps } from "../../models/types";
import { appConstants } from "../../utils/constants";

// Format date string to display in UI
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const formattedDate = `${month} ${date.getDate()}, ${year}`;
  return formattedDate;
};

const Article = ({
  image,
  date,
  source,
  title,
  body,
  author,
}: ArticleProps) => (
  <div className="article">
    <div className="row">
      <div className="col-12 col-md-4 col-xl-2">
        {image && (
          <img
            src={image.replace(image, `${appConstants.API_DOMAIN}${image}`)}
            alt={title}
            className="article-image"
          />
        )}
      </div>
      <div className="col-12 col-md-8 col-xl-10 article-content-header">
        <div className="row">
          <div className="col-7">
            {date && <p className="article-date">{formatDate(date)}</p>}
          </div>
          <div className="col-5">
            {source && <p className="article-source">{source}</p>}
          </div>
        </div>
        <div className="row">
          {title && (
            <h6
              className="col-12 article-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
        </div>
      </div>
    </div>
    {body && (
      <div
        className="col-12 article-body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    )}
    {author && <p className="article-author">{author}</p>}
  </div>
);

export default Article;
