import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  currentPageArticles,
  filterArticlesByAuthors,
  filterArticlesByCategories,
  sortArticles,
} from "../../store/slices/articlesSlice";
import { ListProps } from "../../models/types";
import "./FilterList.scss";

const List = ({ list, onFilterChange }: ListProps) => (
  <ul className="filter-list">
    {list.map((item) => (
      <li key={item} className="filter-item" data-testid="filter-item">
        <input
          type="checkbox"
          id={item}
          name={item}
          value={item}
          className="form-check-input filter-checkbox"
          onChange={() => onFilterChange(item)}
        />
        <label
          htmlFor={item}
          className="filter-label"
          data-testid="filter-label"
        >
          {item}
        </label>
      </li>
    ))}
  </ul>
);

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
    <div className="filter-list-wrapper">
      <div className="filter" data-testid="category-filter">
        <h6 className="filter-heading">Category</h6>
        {categories.length > 0 && (
          <List list={categories} onFilterChange={handleCategoryFilterChange} />
        )}
      </div>
      <div className="filter" data-testid="author-filter">
        <h6 className="filter-heading">Author</h6>
        {authors.length > 0 && (
          <List list={authors} onFilterChange={handleAuthorFilterChange} />
        )}
      </div>
    </div>
  );
};

export default FilterList;
