import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './NavItem.module.scss'

import ShevronIcon from '../../assets/icons/chevron-right.svg?react'

export const NavItem = ({ item }) => {
  const getLinkClass = ({ isActive }) => cn(
    styles.item__link, {
      [styles.item__active]: isActive,
    },
  )

  return (
    <li>
      <NavLink to={item.to} className={getLinkClass}>
        <div className={styles.item__info}>
          <item.icon className={styles[`item__${item.className}`]} />

          <h4 className={styles.item__title}>{item.title}</h4>
        </div>

        <ShevronIcon className={styles['item__icon-stroke']} />
      </NavLink>
    </li>
  )
}
