import getPageNumbers from "../../utils/getPageNumbers";

describe("getPageNumbers utility test suite", () => {
  it("return correct array of page numbers", () => {
    const pageNumbers = getPageNumbers(4);
    expect(pageNumbers).toHaveLength(4);
  });
});
