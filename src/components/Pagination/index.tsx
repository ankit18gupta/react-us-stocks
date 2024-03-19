import { useEffect, useState } from "react";
import { ArticleProps, PaginationProps } from "../../models/types";
import { appConstants } from "../../utils/constants";
import "./Pagination.scss";

const Pagination = ({ articles, onPageChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentArticles, setCurrentArticles] = useState<ArticleProps[]>([]);
  const articlesPerPage = appConstants.ARTICLES_PER_PAGE; // Number of articles to display per page
  const totalPages = Math.ceil(articles?.length! / articlesPerPage); // Calculate the total number of pages
  const pageNumbers: number[] = []; // Array to store page numbers

  // Push page numbers to the array as per the total number of pages
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calculate indexes of articles to be displayed on the current page
  useEffect(() => {
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    setCurrentArticles(
      articles?.slice(indexOfFirstArticle, indexOfLastArticle)!
    );
  }, [currentPage, articles]);

  // Lift the state of articles to be diaplyed on page change
  useEffect(() => {
    onPageChange(currentArticles);
  }, [currentArticles]);

  // Event handler for page change
  const handlePageChange = (e: React.MouseEvent, pageNumber: number) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {pageNumbers.length > 0 && (
        <nav className="pagination-wrapper row justify-content-end">
          <ul className="pagination col-12 justify-content-end">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a
                className="page-link"
                href="#"
                onClick={(e) => handlePageChange(e, currentPage - 1)}
              >
                <span>&lt;</span>
              </a>
            </li>
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? "active" : ""
                }`}
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
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => handlePageChange(e, currentPage + 1)}
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
