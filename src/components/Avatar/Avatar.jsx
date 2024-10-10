import { user } from '../../data/user'

import styles from './Avatar.module.scss'

export const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img className={styles.avatar__photo} src={user.image} alt="user photo" />

      <div className={styles.avatar__info}>
        <p className={styles.avatar__name}>{user.name}</p>
        <p className={styles.avatar__role}>{user.role}</p>
      </div>
    </div>
  )
}
