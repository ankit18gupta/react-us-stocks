import { useAppDispatch, useAppSelector } from "../../hooks";
import { currentPageArticles } from "../../store/slices/articlesSlice";
import { appConstants } from "../../utils/constants";
import getPageNumbers from "../../utils/getPageNumbers";
import "./Pagination.scss";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(
    (state) => state.articlesSlice.filteredArticles
  );
  const activePageNumber = useAppSelector(
    (state) => state.articlesSlice.activePageNumber
  );

  const articlesPerPage = appConstants.ARTICLES_PER_PAGE; // Number of articles to display per page
  const totalPages = Math.ceil(articles.length / articlesPerPage); // Calculate the total number of pages
  const pageNumbers = getPageNumbers(totalPages); // Get page numbers to create pagination

  // Event handler for page change
  const handlePageChange = (e: React.MouseEvent, pageNumber: number) => {
    e.preventDefault();
    dispatch(currentPageArticles(pageNumber));
  };

  return (
    <>
      {pageNumbers.length > 0 && (
        <nav className="pagination-wrapper row">
          <ul className="pagination col-12">
            <li
              className={`page-item ${
                activePageNumber === 1 ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => handlePageChange(e, activePageNumber - 1)}
              >
                <span>&lt;</span>
              </a>
            </li>
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  activePageNumber === number ? "active" : ""
                }`}
                data-testid="page-item"
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={(e) => handlePageChange(e, number)}
                >
                  {number}
                </a>
              </li>
            ))}
            <li
              className={`page-item ${
                activePageNumber === totalPages ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => handlePageChange(e, activePageNumber + 1)}
              >
                <span>&gt;</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
