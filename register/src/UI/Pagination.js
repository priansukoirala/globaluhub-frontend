import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const {
    itemsCount,
    pageSize,
    currentPage,
    onPageChange,
    previousPage,
    nextPage,
  } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="paginationLogistic">
      <ul className="pagination mb-0">
        <li className={"page-item " + (currentPage === 1 ? "disabled" : "")}>
          <a className="page-link pageButton" onClick={() => previousPage()}>
            Prev
          </a>
        </li>
        {pages.map((page) => {
          if (
            page >= parseInt(currentPage - 4) &&
            page < parseInt(currentPage + 11)
          ) {
            return (
              <li
                className={
                  "page-item " + (page === currentPage ? "active" : "")
                }
                key={page}
              >
                <a
                  className="page-link"
                  onClick={() => onPageChange(page)}
                  style={{ cursor: "pointer" }}
                >
                  {page}
                </a>
              </li>
            );
          }
        })}
        <li
          className={
            "page-item " + (currentPage === pages.length ? "disabled" : "")
          }
        >
          <a className="page-link" onClick={() => nextPage()}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
