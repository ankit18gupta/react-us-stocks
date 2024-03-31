import { render, screen } from "@testing-library/react";
import Pagination from "../../components/Pagination";

describe("Pagination component test suite", () => {
  it("renders correct number of pages", () => {
    render(<Pagination />);
    const pageItems = screen.getAllByTestId("page-item");
    expect(pageItems[0]).toBeInTheDocument();
    expect(pageItems).toHaveLength(2);
  });
});
