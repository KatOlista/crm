import { useCustomersStore } from '../../store/customersStore'
import { Pagination } from '..'
import { PAGE_SIZE } from '../../utils';

import styles from './CustomersFooter.module.scss'

export const CustomersFooter = () => {
  const customers = useCustomersStore((state) => state.customers);

  return (
    <footer className={styles.footer}>
      <p>Showing data 1 to {PAGE_SIZE} of {customers.length} entries</p>

      <Pagination />
    </footer>
  )
}
