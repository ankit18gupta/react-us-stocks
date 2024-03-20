import { render, screen, within } from "@testing-library/react";
import FilterList from "../../components/FilterList";
import filterListData from "../../mockData/filterListData.json";

// Mock functions for onCategoryFilterChange and onAuthorFilterChange
const handleCategoryFilterChange = jest.fn();
const handleAuthorFilterChange = jest.fn();

describe("Filter List component test suite", () => {
  it("renders category filter as string with correct value", () => {
    render(
      <FilterList
        categories={filterListData.categories}
        authors={filterListData.authors}
        onCategoryFilterChange={handleCategoryFilterChange}
        onAuthorFilterChange={handleAuthorFilterChange}
      />
    );
    const categoryFilter = screen.getByTestId("category-filter");
    const categoryFilterItems =
      within(categoryFilter).getAllByTestId("filter-item");
    const categoryLabel = within(categoryFilterItems[0]).getByTestId(
      "filter-label"
    );
    expect(categoryFilterItems).toHaveLength(filterListData.categories.length);
    expect(categoryLabel).toBeInTheDocument();
    expect(typeof categoryLabel.textContent).toBe("string");
    expect(categoryLabel.textContent).toBe(filterListData.categories[0]);
  });

  it("renders author filter as string with correct value", () => {
    render(
      <FilterList
        categories={filterListData.categories}
        authors={filterListData.authors}
        onCategoryFilterChange={handleCategoryFilterChange}
        onAuthorFilterChange={handleAuthorFilterChange}
      />
    );
    const authorFilter = screen.getByTestId("author-filter");
    const authorFilterItems =
      within(authorFilter).getAllByTestId("filter-item");
    const authorLabel = within(authorFilterItems[0]).getByTestId(
      "filter-label"
    );
    expect(authorFilterItems).toHaveLength(filterListData.authors.length);
    expect(authorLabel).toBeInTheDocument();
    expect(typeof authorLabel.textContent).toBe("string");
    expect(authorLabel.textContent).toBe(filterListData.authors[0]);
  });
});
