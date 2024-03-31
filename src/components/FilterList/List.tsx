import { ListProps } from "../../models/types";

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

export default List;
