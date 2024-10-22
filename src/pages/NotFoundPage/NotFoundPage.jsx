import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { Title } from '../../components'
import styles from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  useGSAP(() => {
    gsap
      .timeline()
      .from(container.current, {
        x: '100%',
      });
  });

  return (
    <div ref={container} className={styles.page}>
      <Title title='NotFoundPage' />
    </div>
  )
}
