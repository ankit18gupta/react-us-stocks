import { useState } from "react";
import { PaginationProps } from "../../models/types";

const Pagination = ({ articles, handlePageArticles }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5; // Number of articles to display per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(articles?.length! / articlesPerPage);

  // Array to store page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calculate indexes of articles to be displayed on the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles?.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Function to handle page change
  const handlePageChange = (e: React.MouseEvent, pageNumber: number) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
    handlePageArticles(currentArticles!);
  };

  return (
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
            className={`page-item ${currentPage === number ? "active" : ""}`}
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
  );
};

export default Pagination;
