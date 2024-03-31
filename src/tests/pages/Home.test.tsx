import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Home from "../../pages/Home";

// Mock the axios module
jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

describe("Home Page component test suite", () => {
  it("renders home page correctly", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const homePage = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });
});
