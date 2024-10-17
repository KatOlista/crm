import { NavLink } from 'react-router-dom';
import { useRef } from 'react'


import { Avatar, Navigation } from '..'
import { useMenuStore } from '../../store/menuStore'
import { useClickOutside } from '../../hooks/useClickOutside'

import styles from './Menu.module.scss'
import DashboardLogo from '../../assets/icons/dashboard.svg?react'

export const Menu = () => {
  const setIsMenuOpen = useMenuStore(state => state.setIsMenuOpen);

  const closeMenuHandler = () => {
    document.querySelector('#menu')?.classList.remove('menu-active');
    document.body.classList.remove('noscroll');

    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  const menuRef = useRef(null);

  useClickOutside(menuRef, closeMenuHandler);
  return (
    <aside ref={menuRef} id='menu' className={styles.menu}>
      <div className={styles.menu__heading}>
        <NavLink
          to="/"
          className={styles.menu__logo}
        >
          <DashboardLogo />
          </NavLink>

        <h1 className={styles.menu__title}>
          Dashboard
          <span className={styles.menu__version}>v.01</span>
        </h1>
      </div>

      <Navigation />

      <Avatar />
    </aside>
  )
}
