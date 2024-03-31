import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  currentPageArticles,
  fetchArticles,
  sortArticles,
} from "./store/slices/articlesSlice";
import { appConstants } from "./utils/constants";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articlesSlice.articles);
  const sortingOption = useAppSelector(
    (state) => state.articlesSlice.sortingOption
  );
  const activePageNumber = useAppSelector(
    (state) => state.articlesSlice.activePageNumber
  );

  // Fetch all articles on page load
  useEffect(() => {
    dispatch(fetchArticles(appConstants.FETCH_API_URL));
  }, []);

  // Sort articles by default to date descending and display only current page articles
  useEffect(() => {
    dispatch(sortArticles(sortingOption));
    dispatch(currentPageArticles(activePageNumber));
  }, [articles]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
