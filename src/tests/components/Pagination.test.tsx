import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Pagination from "../../components/Pagination";

// Mock the axios module
jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

describe("Pagination component test suite", () => {
  it("renders pagination correctly", () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
  });
});
