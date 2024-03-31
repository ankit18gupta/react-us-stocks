import getFormattedDate from "../../utils/getFormattedDate";
import articleListData from "../../mockData/articleListData.json";

describe("getFormattedDate utility test suite", () => {
  it("return correct formatted date for an article", () => {
    const formattedDate = getFormattedDate(articleListData.articles[0].date);
    expect(formattedDate).toBe("December 1, 2023");
  });
});
