import { user } from '../../data/user'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      Hello {user.name} 👋🏼,
    </header>
  )
}
