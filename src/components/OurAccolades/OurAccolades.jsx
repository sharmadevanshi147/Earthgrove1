import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './OurAccolades.module.css'

const ACCOLADES = [
  { id: 1, text: 'Regarded as Logical Vaastu Expert by Divyavastu' },
  { id: 2, text: 'Given Indiamart Trustseal by Indiamart' },
  { id: 3, text: 'Featured in Livehindustan Newspaper for Kalkaji Mandir Redevelopment' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const slideIn = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

function TrophyIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true" className={styles.trophyIcon}>
      <path d="M9 13c-3.31 0-6-2.69-6-6V2h12v5c0 3.31-2.69 6-6 6Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M3 4H1a1 1 0 0 0-1 1v1a4 4 0 0 0 3 3.87M15 4h2a1 1 0 0 1 1 1v1a4 4 0 0 1-3 3.87" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M9 13v4M6 19h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

export default function OurAccolades() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.section} id="accolades" aria-label="Our Accolades">
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.headingBlock}>
          <span className={styles.sectionLabel}>Recognition</span>
          <h2 className={styles.heading}>Our Accolades</h2>
        </div>

        <motion.ol
          className={styles.list}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {ACCOLADES.map((a) => (
            <motion.li key={a.id} className={styles.row} variants={slideIn}>
              <span className={styles.rowLeft}>
                <span className={styles.num}>0{a.id}</span>
                <TrophyIcon />
              </span>
              <span className={styles.title}>{a.text}</span>
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </section>
  )
}
