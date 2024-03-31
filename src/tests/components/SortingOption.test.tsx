import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import SortingOption from "../../components/SortingOption";

// Mock the axios module
jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

describe("Sorting Option component test suite", () => {
  it("renders correct number of sorting options in the dropdown list", () => {
    render(
      <Provider store={store}>
        <SortingOption />
      </Provider>
    );
    const sortingOptionDropdown = screen.getByTestId("sorting-option-dropdown");
    const sortingOptions = sortingOptionDropdown.getElementsByTagName("option");
    expect(sortingOptionDropdown).toBeInTheDocument();
    expect(sortingOptions).toHaveLength(4);
  });
});
