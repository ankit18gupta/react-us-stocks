import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import ArticleList from "../../components/ArticleList";

// Mock the axios module
jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

describe("Article List component test suite", () => {
  it("renders artcile list wrapper correctly", () => {
    render(
      <Provider store={store}>
        <ArticleList />
      </Provider>
    );
    const articleListWrapper = screen.getByTestId("article-list-wrapper");
    expect(articleListWrapper).toBeInTheDocument();
  });
});
