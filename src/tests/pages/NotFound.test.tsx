import { render, screen } from "@testing-library/react";
import NotFound from "../../pages/NotFound";

describe("NotFound Page component test suite", () => {
  it("renders NotFound page correctly", () => {
    render(<NotFound />);
    const notFoundPage = screen.getByTestId("not-found-page");
    expect(notFoundPage).toBeInTheDocument();
  });
});
