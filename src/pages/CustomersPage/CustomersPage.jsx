import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { CustomerFilter, Customers, CustomersFooter } from '../../components'
import { useCustomersStore } from '../../store/customersStore';

import styles from './CustomersPage.module.scss'

export const CustomersPage = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  useGSAP(() => {
    gsap
      .timeline()
      .from(container.current, {
        x: '100%',
      });
  });

  const customers = useCustomersStore(state => state.customers);

  return (
    <div ref={container} className={styles.customers}>
      <CustomerFilter />

      {customers.length
        ? (<Customers />)
        : (<p className={styles.customers__message}>There are no available customers</p>)
      }

      <CustomersFooter />
    </div>
  )
}
