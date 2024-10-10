import { ACTIVE } from '../../utils';

import styles from './CustomerItem.module.scss'

export const CustomerItem = ({ person, itemClass }) => {
  const {
    'customer name': name,
    company,
    'phone number': phone,
    email,
    country,
    status
  } = person;

  const className = status === ACTIVE
    ? `${styles.item__active}`
    : `${styles.item__inactive}`;

  return (
    <li className={`${itemClass} ${styles.item}`}>
      <p>{name}</p>
      <p>{company}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{country}</p>
      <p><span className={className}>{status}</span></p>
    </li>
  )
}
