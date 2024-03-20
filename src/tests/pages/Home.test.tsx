import { render, screen } from "@testing-library/react";
import axios from "axios";
import Home from "../../pages/Home";
import articleListData from "../../mockData/articleListData.json";

// Mock the axios module
jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

describe("Home Page component test suite", () => {
  beforeEach(() => {
    // Mock axios.get() implementation
    jest
      .spyOn(axios, "get")
      .mockResolvedValue({ data: articleListData.articles });
  });

  it("renders home page correctly", () => {
    render(<Home />);
    const homePage = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });
});
