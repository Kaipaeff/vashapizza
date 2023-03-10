import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss';

export default function Pagination() {
  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => console.log(e)}
      pageRangeDisplayed={4}
      pageCount={4}
      renderOnZeroPageCount={null}
    />
  );
}
