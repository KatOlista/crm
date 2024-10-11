import { Pagination } from '..'
import { PAGE_SIZE } from '../../utils'
import { useCustomersStore } from '../../store/customersStore'
import { usePaginationStore } from '../../store/paginationStore'

import styles from './CustomersFooter.module.scss'

export const CustomersFooter = () => {
  const customers = useCustomersStore((state) => state.customers);
  const fromItem = usePaginationStore(state => state.fromItem);

  const customersAmount = customers.length;

  const toItem = customersAmount > fromItem + PAGE_SIZE
    ? fromItem + PAGE_SIZE
    : customersAmount

  return (
    <footer className={styles.footer}>
      <p>Showing data {fromItem + 1} to {toItem} of {customersAmount} entries</p>

      <Pagination />
    </footer>
  )
}
