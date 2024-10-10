import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import cn from 'classnames'

import { Button } from '..'
import { usePagination } from '../../hooks/usePagination'
import { useCustomersStore } from '../../store/customersStore'
import { DEFAULT_PAGE, DEFAULT_SIBLING, DOTS, PAGE_SIZE } from '../../utils'

import styles from './Pagination.module.scss'

export const Pagination = () => {
  const customers = useCustomersStore((state) => state.customers);
  const [page, setPage] = useState(DEFAULT_PAGE);

  const pageCount = Math.ceil(customers.length / PAGE_SIZE);

  const paginationPages = usePagination({
    totalCount: customers.length,
    pageSize: PAGE_SIZE,
    siblingCount: DEFAULT_SIBLING,
    currentPage: page,
  });

  const isActivePrev = page === DEFAULT_PAGE;
  const isActiveNext = page === pageCount;

  // customersFromPage =

  const pageHandler = (direction) => {
    if (direction === 'next' && page < pageCount) {
      return setPage(page + 1);
    }

    if (direction === 'prev' && page > DEFAULT_PAGE) {
      return setPage(page - 1);
    }

    return null;
  };

  const pagePaginationHandler = (content) => {
    const myuuid = uuidv4();

    if (content === DOTS) {
      return (
        <li key={myuuid}><p>{DOTS}</p></li>
      )
    }

    return (
      <li key={content}>
        <Button
          onClick={() => setPage(content)}
          buttonClassName={cn(
            styles.pagination__button,
            { [styles.pagination__selected]: content === page }
          )}
        >
          {content}
        </Button>
      </li>
    )
  }

  return (
    <ul className={styles.pagination}>
      <li>
        <Button
          disabled={isActivePrev}
          buttonClassName={styles.pagination__button}
          onClick={() => pageHandler('prev')}
        >
          &#60;
        </Button>
      </li>

      <ul className={styles.pagination__pages}>
        {paginationPages.map(pageNumber => pagePaginationHandler(pageNumber))}
      </ul>

      <li>
        <Button
          disabled={isActiveNext}
          buttonClassName={styles.pagination__button}
          onClick={() =>pageHandler('next')}
        >
          &#62;
        </Button>
      </li>
    </ul>
  )
}
