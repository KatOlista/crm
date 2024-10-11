import { useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import cn from 'classnames'

import { Button } from '..'
import { changePage } from '../../utils/changePage'
import { usePagination } from '../../hooks/usePagination'
import { useCustomersStore } from '../../store/customersStore'
import { usePaginationStore } from '../../store/paginationStore'
import { DEFAULT_PAGE, DEFAULT_SIBLING, DOTS, PAGE_SIZE } from '../../utils'

import styles from './Pagination.module.scss'

export const Pagination = () => {
  const customers = useCustomersStore(state => state.customers);
  const setVisibleCustomers = useCustomersStore(state => state.setVisibleCustomers);

  const page = usePaginationStore(state => state.page);
  const setPage = usePaginationStore(state => state.setPage);
  const fromItem = usePaginationStore(state => state.fromItem);
  const setFromItem = usePaginationStore(state => state.setFromItem);

  const pageCount = Math.ceil(customers.length / PAGE_SIZE);

  const paginationPages = usePagination({
    totalCount: customers.length,
    pageSize: PAGE_SIZE,
    siblingCount: DEFAULT_SIBLING,
    currentPage: page,
  });

  const isActivePrev = page === DEFAULT_PAGE;
  const isActiveNext = page === pageCount;

  useEffect(() => {
    setFromItem();
    setVisibleCustomers(fromItem, page);
  }, [fromItem, customers, page]);

  const pageListHandler = (content) => {
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
          onClick={() => changePage('prev', page, setPage, pageCount)}
        >
          &#60;
        </Button>
      </li>

      <ul className={styles.pagination__pages}>
        {paginationPages.map(pageNumber => pageListHandler(pageNumber))}
      </ul>

      <li>
        <Button
          disabled={isActiveNext}
          buttonClassName={styles.pagination__button}
          onClick={() => changePage('next', page, setPage, pageCount)}
        >
          &#62;
        </Button>
      </li>
    </ul>
  )
}
