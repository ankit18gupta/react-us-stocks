import getFilteredArticles from "../../utils/getFilteredArticles";
import articleListData from "../../mockData/articleListData.json";
import filterListData from "../../mockData/filterListData.json";

describe("getFilteredArticles utility test suite", () => {
  it("return correct number of filtered articles", () => {
    const filteredArticles = getFilteredArticles(
      filterListData.categories,
      filterListData.authors,
      articleListData.articles
    );
    expect(filteredArticles).toHaveLength(8);
  });
});
