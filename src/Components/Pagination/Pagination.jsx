import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss';

export default function Pagination({ onChangePage }) {
  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={2}
      renderOnZeroPageCount={null}
    />
  );
}
