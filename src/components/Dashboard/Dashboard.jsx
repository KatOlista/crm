import { NavLink } from 'react-router-dom';

import { Navigation } from '..';

import styles from './Dashboard.module.scss'
import DashboardLogo from '../../assets/icons/dashboard.svg?react'

export const Dashboard = () => {
  return (
    <aside className={styles.dashboard}>
      <div className={styles.dashboard__heading}>
        <NavLink
          to="/"
          className={styles.dashboard__logo}
        >
          <DashboardLogo />
          </NavLink>

        <h1 className={styles.dashboard__title}>
          Dashboard
          <span className={styles.dashboard__version}>v.01</span>
        </h1>
      </div>

      <Navigation />
    </aside>
  )
}
