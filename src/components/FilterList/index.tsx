import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  currentPageArticles,
  filterArticlesByAuthors,
  filterArticlesByCategories,
  sortArticles,
} from "../../store/slices/articlesSlice";
import List from "./List";
import "./FilterList.scss";

const FilterList = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articlesSlice.articles);
  const sortingOption = useAppSelector(
    (state) => state.articlesSlice.sortingOption
  );

  // Extract unique categories and authors from articles
  const categories = Array.from(
    new Set(articles.map((article) => article.source!))
  );
  const authors = Array.from(
    new Set(articles.map((article) => article.author!))
  );

  // Event handlers for category and author filter changes
  const handleCategoryFilterChange = (category: string) => {
    dispatch(filterArticlesByCategories(category));
    dispatch(sortArticles(sortingOption));
    dispatch(currentPageArticles(1));
  };

  const handleAuthorFilterChange = (category: string) => {
    dispatch(filterArticlesByAuthors(category));
    dispatch(sortArticles(sortingOption));
    dispatch(currentPageArticles(1));
  };

  return (
    <div className="filter-list-wrapper" data-testid="filter-list-wrapper">
      <div className="filter">
        <h6 className="filter-heading">Category</h6>
        {categories.length > 0 && (
          <List list={categories} onFilterChange={handleCategoryFilterChange} />
        )}
      </div>
      <div className="filter">
        <h6 className="filter-heading">Author</h6>
        {authors.length > 0 && (
          <List list={authors} onFilterChange={handleAuthorFilterChange} />
        )}
      </div>
    </div>
  );
};

export default FilterList;
