import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { Title } from '../../components'
import styles from './IncomePage.module.scss'

export const IncomePage = () => {
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
    <div ref={container} className={styles.income}>
      <Title title='IncomePage' />
    </div>
  )
}
