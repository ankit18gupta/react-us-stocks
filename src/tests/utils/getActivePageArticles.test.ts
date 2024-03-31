import getActivePageArticles from "../../utils/getActivePageArticles";
import articleListData from "../../mockData/articleListData.json";

describe("getActivePageArticles utility test suite", () => {
  it("return correct number of active page articles", () => {
    const activePageArticles = getActivePageArticles(
      1,
      articleListData.articles
    );
    expect(activePageArticles).toHaveLength(5);
  });
});
