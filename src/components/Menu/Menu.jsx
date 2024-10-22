import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { NavLink } from 'react-router-dom'

import { Avatar, Button, Navigation } from '..'
import { useMenuStore } from '../../store/menuStore'
import { useClickOutside } from '../../hooks/useClickOutside'

import styles from './Menu.module.scss'
import CloseMenuIcon from '../../assets/icons/close.svg?react'
import DashboardLogo from '../../assets/icons/dashboard.svg?react'

export const Menu = () => {
  gsap.registerPlugin(useGSAP);

  const menuRef = useRef(null);

  useGSAP(() => {
    gsap
      .timeline()
      .from(menuRef.current, {
        x: '-100%',
      });
  }, {scope: menuRef});

  const setIsMenuOpen = useMenuStore(state => state.setIsMenuOpen);

  const closeMenuHandler = () => {
    document.querySelector('#menu')?.classList.remove('menu-active');
    document.body.classList.remove('noscroll');

    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

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

        <Button
          buttonClassName={styles.menu__button}
          onClick={closeMenuHandler}
        >
          <CloseMenuIcon className={styles.menu__icon} />
        </Button>
      </div>

      <Navigation />

      <Avatar />
    </aside>
  )
}
