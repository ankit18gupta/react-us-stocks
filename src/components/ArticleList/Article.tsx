import { ArticleProps } from "../../models/types";

const ApiDomain = "https://dev-storm-rest-api.pantheonsite.io"; // API Domain

const Article = ({
  image,
  date,
  source,
  title,
  body,
  author,
}: ArticleProps) => {
  return (
    <div className="article">
      <div className="row">
        <div className="col-12 col-md-2">
          {image && (
            <img
              src={image.replace(image, `${ApiDomain}${image}`)}
              alt={title}
              className="article-image"
            />
          )}
        </div>
        <div className="col-12 col-md-10">
          <div className="row">
            <div className="col-12 col-md-10">
              {date && <p className="article-date">{date}</p>}
            </div>
            <div className="col-12 col-md-2">
              {source && <p className="article-source">{source}</p>}
            </div>
          </div>
          <div className="row">
            {title && (
              <div
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
};

export default Article;
