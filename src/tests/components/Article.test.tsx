import { render, screen } from "@testing-library/react";
import Article from "../../components/ArticleList/Article";
import articleListData from "../../mockData/articleListData.json";

describe("Article component test suite", () => {
  beforeEach(() => {
    render(<Article {...articleListData.articles[0]} showArticle={true} />);
  });

  it("renders article image src and alt text as string with correct values", () => {
    const image = screen.getByTestId("image");
    const src = image.getAttribute("src");
    const altText = image.getAttribute("alt");
    expect(image).toBeInTheDocument();
    expect(typeof src).toBe("string");
    expect(src).toContain(articleListData.articles[0].image);
    expect(typeof altText).toBe("string");
    expect(altText).toBe(articleListData.articles[0].title);
  });

  it("renders article date as string", () => {
    const date = screen.getByTestId("date");
    expect(date).toBeInTheDocument();
    expect(typeof date.textContent).toBe("string");
  });

  it("renders article category as string with correct value", () => {
    const category = screen.getByTestId("category");
    expect(category).toBeInTheDocument();
    expect(typeof category.textContent).toBe("string");
    expect(category.textContent).toBe(articleListData.articles[0].source);
  });

  it("renders article title as string with correct url and value", () => {
    const titleLink = screen.getByTestId("title-link");
    const titleUrl = titleLink.getAttribute("href");
    expect(titleLink).toBeInTheDocument();
    expect(typeof titleUrl).toBe("string");
    expect(titleUrl).toBe(articleListData.articles[0].url);
    expect(typeof titleLink.textContent).toBe("string");
    expect(titleLink.textContent).toBe(articleListData.articles[0].title);
  });

  it("renders article body as string with correct value", () => {
    const body = screen.getByTestId("body");
    expect(body).toBeInTheDocument();
    expect(typeof body.innerHTML).toBe("string");
    expect(body.innerHTML).toBe(articleListData.articles[0].body);
  });

  it("renders article author as string with correct value", () => {
    const author = screen.getByTestId("author");
    expect(author).toBeInTheDocument();
    expect(typeof author.textContent).toBe("string");
    expect(author.textContent).toBe(articleListData.articles[0].author);
  });
});
