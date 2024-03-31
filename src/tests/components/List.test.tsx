import { render, screen, within } from "@testing-library/react";
import List from "../../components/FilterList/List";
import filterListData from "../../mockData/filterListData.json";

const filterItem = "filter-item";
const filterLabel = "filter-label";

// Mock function for onFilterChange
const onFilterChange = jest.fn();

describe("List component test suite", () => {
  it("renders category filter as string with correct value", () => {
    render(
      <List list={filterListData.categories} onFilterChange={onFilterChange} />
    );
    const categoryFilterItems = screen.getAllByTestId(filterItem);
    const categoryLabel = within(categoryFilterItems[0]).getByTestId(
      filterLabel
    );
    expect(categoryFilterItems).toHaveLength(filterListData.categories.length);
    expect(categoryLabel).toBeInTheDocument();
    expect(typeof categoryLabel.textContent).toBe("string");
    expect(categoryLabel.textContent).toBe(filterListData.categories[0]);
  });

  it("renders author filter as string with correct value", () => {
    render(
      <List list={filterListData.authors} onFilterChange={onFilterChange} />
    );
    const authorFilterItems = screen.getAllByTestId(filterItem);
    const authorLabel = within(authorFilterItems[0]).getByTestId(filterLabel);
    expect(authorFilterItems).toHaveLength(filterListData.authors.length);
    expect(authorLabel).toBeInTheDocument();
    expect(typeof authorLabel.textContent).toBe("string");
    expect(authorLabel.textContent).toBe(filterListData.authors[0]);
  });
});
