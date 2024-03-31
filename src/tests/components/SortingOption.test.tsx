import { render, screen } from "@testing-library/react";
import SortingOption from "../../components/SortingOption";

describe("Sorting Option component test suite", () => {
  it("renders correct number of sorting options in the dropdown list", () => {
    render(<SortingOption />);
    const sortingOptionDropdown = screen.getByTestId("sorting-option-dropdown");
    const sortingOptions = sortingOptionDropdown.getElementsByTagName("option");
    expect(sortingOptionDropdown).toBeInTheDocument();
    expect(sortingOptions).toHaveLength(4);
  });
});
