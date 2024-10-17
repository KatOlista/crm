import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { useMenuStore } from '../../store/menuStore'

import styles from './NavItem.module.scss'

import ShevronIcon from '../../assets/icons/chevron-right.svg?react'

export const NavItem = ({ item }) => {
  const getLinkClass = ({ isActive }) => cn(
    styles.item__link, {
      [styles.item__active]: isActive,
    },
  )

  const setIsMenuOpen = useMenuStore(state => state.setIsMenuOpen);

  const closeMenuHandler = () => {
    document.querySelector('#menu')?.classList.remove('menu-active');
    document.body.classList.remove('noscroll');

    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  return (
    <li>
      <NavLink to={item.to} className={getLinkClass} onClick={closeMenuHandler}>
        <div className={styles.item__info}>
          <item.icon className={styles[`item__${item.className}`]} />

          <h4 className={styles.item__title}>{item.title}</h4>
        </div>

        <ShevronIcon className={styles['item__icon-stroke']} />
      </NavLink>
    </li>
  )
}
