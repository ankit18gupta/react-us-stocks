import { SortingOptionProps } from "../../models/types";

const SortingOption = ({ onSortingOptionChange }: SortingOptionProps) => (
  <div className="sorting-option-wrapper filter-list-wrapper">
    <div className="sorting-option filter">
      <h6 className="sorting-heading filter-heading">Sort By</h6>
      <select
        className="form-select sorting-option-dropdown mt-3"
        onChange={(e) => onSortingOptionChange(e.target.value)}
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

export default SortingOption;
