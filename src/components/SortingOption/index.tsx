import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  currentPageArticles,
  sortArticles,
} from "../../store/slices/articlesSlice";

const SortingOption = () => {
  const dispatch = useAppDispatch();
  const activePageNumber = useAppSelector(
    (state) => state.articlesSlice.activePageNumber
  );

  // Event handler for sorting option change
  const handleSortingOptionChange = (option: string) => {
    dispatch(sortArticles(option));
    dispatch(currentPageArticles(activePageNumber));
  };

  return (
    <div className="sorting-option-wrapper filter-list-wrapper">
      <div className="sorting-option filter">
        <h6 className="sorting-heading filter-heading">Sort By</h6>
        <select
          className="form-select sorting-option-dropdown mt-3"
          onChange={(e) => handleSortingOptionChange(e.target.value)}
          data-testid="sorting-option-dropdown"
        >
          <option value="latestToEarliest" className="sorting-option">
            Date Latest
          </option>
          <option value="earliestToLatest" className="sorting-option">
            Date Earliest
          </option>
          <option value="titleDescending" className="sorting-option">
            Title Descending
          </option>
          <option value="titleAscending" className="sorting-option">
            Title Ascending
          </option>
        </select>
      </div>
    </div>
  );
};

export default SortingOption;
