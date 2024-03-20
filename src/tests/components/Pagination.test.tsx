import { render, screen } from "@testing-library/react";
import Pagination from "../../components/Pagination";
import articleListData from "../../data/articleListData.json";

// Mock function for onPageChange
const onPageChange = jest.fn();

describe("Pagination component test suite", () => {
  it("renders correct number of pages", () => {
    render(
      <Pagination
        articles={articleListData.articles}
        onPageChange={onPageChange}
      />
    );
    const pageItems = screen.getAllByTestId("page-item");
    expect(pageItems[0]).toBeInTheDocument();
    expect(pageItems).toHaveLength(2);
  });
});
