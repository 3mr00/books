import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { getPage } from "../../../redux/actions/productsAction";

import "./Paginate.css";

const Paginate = () => {
  const [pageCount, setpageCount] = useState(0);

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setpageCount(pages);
  }, [pages]);

  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
  };

  return (
    <>
      <ReactPaginate
        onClick={() => window.scroll(0, 430)}
        breakLabel="..."
        previousLabel={"previous"}
        nextLabel={"next"}
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        containerClassName={"pagination justify-content-center margin-top-5%"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Paginate;
