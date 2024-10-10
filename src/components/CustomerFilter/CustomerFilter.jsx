import cn from 'classnames'

import { SearchBar, Title } from '../../components'
import { useCustomersStore } from '../../store/customersStore'
import { ACTIVE } from '../../utils';

import styles from './CustomerFilter.module.scss'

export const CustomerFilter = () => {
  const customers = useCustomersStore((state) => state.customers);

  let hasActive;

  if (customers.length) {
    hasActive = customers.some(customer => customer.status === ACTIVE);
  }

  return (
    <div className={styles.filter}>
      <div>
        <Title title='All Customers' />

        <p className={cn(
          styles.filter__members,
          { [styles.filter__invisible]: !hasActive }
        )}>Active Members</p>
      </div>

      <SearchBar />
    </div>
  )
}
