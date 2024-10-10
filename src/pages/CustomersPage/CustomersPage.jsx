import { CustomerFilter, Customers, CustomersFooter } from '../../components'
import { useCustomersStore } from '../../store/customersStore';

import styles from './CustomersPage.module.scss'

export const CustomersPage = () => {
  const customers = useCustomersStore((state) => state.customers);

  return (
    <div className={styles.customers}>
      <CustomerFilter />

      {customers.length
        ? (<Customers />)
        : (<p className={styles.customers__message}>There are no available customers</p>)
      }

      <CustomersFooter />
    </div>
  )
}
