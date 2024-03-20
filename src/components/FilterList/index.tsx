import { ListProps, FilterListProps } from "../../models/types";
import "./FilterList.scss";

const List = ({ list, onFilterChange }: ListProps) => (
  <ul className="filter-list">
    {list?.map((item) => (
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

const FilterList = ({
  categories,
  authors,
  onCategoryFilterChange,
  onAuthorFilterChange,
}: FilterListProps) => (
  <div className="filter-list-wrapper">
    <div className="filter" data-testid="category-filter">
      <h6 className="filter-heading">Category</h6>
      {categories?.length! > 0 && (
        <List list={categories} onFilterChange={onCategoryFilterChange} />
      )}
    </div>
    <div className="filter" data-testid="author-filter">
      <h6 className="filter-heading">Author</h6>
      {authors?.length! > 0 && (
        <List list={authors} onFilterChange={onAuthorFilterChange} />
      )}
    </div>
  </div>
);

export default FilterList;
