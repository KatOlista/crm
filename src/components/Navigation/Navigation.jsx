import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './Navigation.module.scss'
import { menu } from '../../data/menu';

export const Navigation = () => {
  const getLinkClass = ({ isActive }) => cn(
    styles.navigation__link, {
      [styles.navigation__active]: isActive,
    },
  );

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}>
          {menu.map(item => (
            <NavLink
              key={item.id}
              to={item.to}
              className={getLinkClass}
            >
              <div>
                <item.icon />

                {item.title}
              </div>
            </NavLink>
          ))}
        </li>
      </ul>
    </nav>
  )
}
