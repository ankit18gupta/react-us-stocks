import { render, screen } from "@testing-library/react";
import Loader from "../../components/Loader";

describe("Loader component test suite", () => {
  it("renders loader", () => {
    render(<Loader />);
    const loader = screen.getByTestId("loader-wrapper");
    expect(loader).toBeInTheDocument();
  });
});
