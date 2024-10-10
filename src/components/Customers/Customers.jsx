import { useCustomersStore } from '../../store/customersStore'
import { CustomerItem } from '../'

import styles from './Customers.module.scss'

export const Customers = () => {
  const customers = useCustomersStore((state) => state.customers);

  return (
    <div className={styles.customers__wrapper}>

      <ul className={styles.customers__list}>
        <li className={`${styles.customers__head} ${styles.customers__item}`}>
          {Object.keys(customers[0])
            .filter(name => name !== 'slug')
            .map(name => (
              <p className={styles.customers__th} key={name}>{name}</p>
          ))}
        </li>

        {customers?.map(person => (
          <CustomerItem
            key={person.slug}
            person={person}
            itemClass={styles.customers__item}
          />
        ))}
      </ul>
    </div>
  )
}
