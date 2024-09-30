import { menu } from '../../data/menu';
import { NavItem } from '../NavItem/NavItem';

import styles from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {menu.map(item => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  )
}
