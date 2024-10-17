import cn from 'classnames'

import { user } from '../../data/user'
import { Button } from '..'
import { useMenuStore } from '../../store/menuStore'

import styles from './Header.module.scss'

import BurgerMenuIcon from '../../assets/icons/burger-menu.svg?react'
import CloseMenuIcon from '../../assets/icons/close.svg?react'

export const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuStore(state => state);

  const toggleMenuHandler = (e) => {
    e.stopPropagation();

    const menu = document.querySelector('#menu');

    if (menu?.classList.contains('menu-active')) {
      menu?.classList.remove('menu-active');

      document.body.classList.remove('noscroll');

      setTimeout(() => {
        setIsMenuOpen(!isMenuOpen);
      }, 200);
    } else {
      setIsMenuOpen(!isMenuOpen);
      document.body.classList.add('noscroll');

      setTimeout(() => {
        document.querySelector('#menu')?.classList.add('menu-active');
      }, 101);
    }
  };

  return (
    <header className={styles.header}>
      Hello {user.name} 👋🏼,

      <Button
        buttonClassName={styles.header__button}
        onClick={toggleMenuHandler}
      >
        <BurgerMenuIcon
          className={cn(styles.header__icon, {
            [styles.header__show]: !isMenuOpen,
          })}
        />
        <CloseMenuIcon
          className={cn(styles.header__icon, {
            [styles.header__show]: isMenuOpen,
          })}
        />
      </Button>
    </header>
  )
}
