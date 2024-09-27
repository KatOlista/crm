import styles from './Title.module.scss'

export const Title = ({ title }) => (
  <h2 className={styles.title}>{title}</h2>
)
