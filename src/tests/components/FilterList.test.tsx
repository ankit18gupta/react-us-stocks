import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import FilterList from "../../components/FilterList";

// Mock the axios module
jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

describe("Filter List component test suite", () => {
  it("renders filter list wrapper correctly", () => {
    render(
      <Provider store={store}>
        <FilterList />
      </Provider>
    );
    const filterListWrapper = screen.getByTestId("filter-list-wrapper");
    expect(filterListWrapper).toBeInTheDocument();
  });
});
