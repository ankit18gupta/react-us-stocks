import getSortedArticles from "../../utils/getSortedArticles";
import articleListData from "../../mockData/articleListData.json";

describe("getSortedArticles utility test suite", () => {
  it("return correct number of sorted articles", () => {
    const sortedArticles = getSortedArticles(
      "titleDescending",
      articleListData.articles
    );
    expect(sortedArticles).toHaveLength(8);
  });
});
