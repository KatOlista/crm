import { NavLink } from 'react-router-dom';

import styles from './Dashboard.module.scss'

export const Dashboard = () => {
  return (
    <aside className={styles.dashboard}>
      <NavLink
        to="/"
        className={styles.dashboard__logo}
      >
        logo
        </NavLink>

      <h1 className={styles.dashboard__title}>Dashboard</h1>

      <p className={styles.dashboard__version}>v.01</p>

    </aside>
  )
}
