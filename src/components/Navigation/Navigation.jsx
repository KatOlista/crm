import { NavItem } from '..'
import { menu } from '../../data/menu'

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
