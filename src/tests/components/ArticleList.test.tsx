import { render, screen, within } from "@testing-library/react";
import ArticleList from "../../components/ArticleList";
import articleListData from "../../data/articleListData.json";

describe("Article List component test suite", () => {
  it("renders correct number of articles", () => {
    render(
      <ArticleList
        articles={articleListData.articles}
        articlesToDisplay={articleListData.articlesToDisplay}
      />
    );
    const articles = screen.getAllByTestId("article");
    expect(articles[0]).toBeInTheDocument();
    expect(articles).toHaveLength(articleListData.articles.length);
  });

  it("hide articles when showArticle is false", () => {
    render(
      <ArticleList
        articles={articleListData.articles}
        articlesToDisplay={articleListData.articlesToDisplay}
      />
    );
    const articles = screen.getAllByTestId("article");
    const articleClass = articles[0].getAttribute("class");
    expect(articleClass).toContain("hide-article");
  });

  it("renders article image src and alt text as string with correct values", () => {
    render(
      <ArticleList
        articles={articleListData.articles}
        articlesToDisplay={articleListData.articlesToDisplay}
      />
    );
    const articles = screen.getAllByTestId("article");
    const image = within(articles[0]).getByTestId("image");
    const src = image.getAttribute("src");
    const altText = image.getAttribute("alt");
    expect(image).toBeInTheDocument();
    expect(typeof src).toBe("string");
    expect(src).toContain(articleListData.articles[0].image);
    expect(typeof altText).toBe("string");
    expect(altText).toBe(articleListData.articles[0].title);
  });

  it("renders article date as string", () => {
    render(
      <ArticleList
        articles={articleListData.articles}
        articlesToDisplay={articleListData.articlesToDisplay}
      />
    );
    const articles = screen.getAllByTestId("article");
    const date = within(articles[0]).getByTestId("date");
    expect(date).toBeInTheDocument();
    expect(typeof date.textContent).toBe("string");
  });

  it("renders article category as string with correct value", () => {
    render(
      <ArticleList
        articles={articleListData.articles}
        articlesToDisplay={articleListData.articlesToDisplay}
      />
    );
    const articles = screen.getAllByTestId("article");
    const category = within(articles[0]).getByTestId("category");
    expect(category).toBeInTheDocument();
    expect(typeof category.textContent).toBe("string");
    expect(category.textContent).toBe(articleListData.articles[0].source);
  });

  it("renders article title as string with correct url and value", () => {
    render(
      <ArticleList
        articles={articleListData.articles}
        articlesToDisplay={articleListData.articlesToDisplay}
      />
    );
    const articles = screen.getAllByTestId("article");
    const titleLink = within(articles[0]).getByTestId("title-link");
    const titleUrl = titleLink.getAttribute("href");
    expect(titleLink).toBeInTheDocument();
    expect(typeof titleUrl).toBe("string");
    expect(titleUrl).toBe(articleListData.articles[0].url);
    expect(typeof titleLink.textContent).toBe("string");
    expect(titleLink.textContent).toBe(articleListData.articles[0].title);
  });

  it("renders article body as string with correct value", () => {
    render(
      <ArticleList
        articles={articleListData.articles}
        articlesToDisplay={articleListData.articlesToDisplay}
      />
    );
    const articles = screen.getAllByTestId("article");
    const body = within(articles[0]).getByTestId("body");
    expect(body).toBeInTheDocument();
    expect(typeof body.innerHTML).toBe("string");
    expect(body.innerHTML).toBe(articleListData.articles[0].body);
  });

  it("renders article author as string with correct value", () => {
    render(
      <ArticleList
        articles={articleListData.articles}
        articlesToDisplay={articleListData.articlesToDisplay}
      />
    );
    const articles = screen.getAllByTestId("article");
    const author = within(articles[0]).getByTestId("author");
    expect(author).toBeInTheDocument();
    expect(typeof author.textContent).toBe("string");
    expect(author.textContent).toBe(articleListData.articles[0].author);
  });
});
