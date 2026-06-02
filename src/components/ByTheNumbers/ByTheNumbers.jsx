import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './ByTheNumbers.module.css'

const STATS = [
  { id: 'projects',   value: 40,  suffix: '+',  label: 'Projects Inaugurated' },
  { id: 'cities',     value: 8,   suffix: '+',  label: 'Cities in India & Abroad' },
  { id: 'retention',  value: 95,  suffix: '%',  label: 'Client Retention' },
  { id: 'commitment', value: 100, suffix: '%',  label: 'Commitment to Craft' },
]

function useCounter(target, duration, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return count
}

function StatItem({ stat, active }) {
  const count = useCounter(stat.value, 1600, active)

  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>
        {count}{stat.suffix}
      </span>
      <span className={styles.statLabel}>{stat.label}</span>
    </div>
  )
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function ByTheNumbers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.section} id="numbers" aria-label="By The Numbers">
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className={styles.headingWrap} variants={fadeUp}>
          <span className={styles.sectionLabel}>Impact, Measured</span>
          <h2 className={styles.heading}>By The Numbers</h2>
        </motion.div>

        <motion.div className={styles.statsRow} variants={stagger}>
          {STATS.map((stat) => (
            <motion.div key={stat.id} className={styles.statWrapper} variants={fadeUp}>
              <StatItem stat={stat} active={inView} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
