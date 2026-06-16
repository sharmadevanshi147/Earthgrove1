import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './AHouseOfTrust.module.css'

const floorplanImg = `${import.meta.env.BASE_URL}assets/Frame 148.png`

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/* ── Section ── */
export default function AHouseOfTrust() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.section} id="about" aria-label="A House of Trust">
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* ── Left: heading + body ── */}
        <motion.div className={styles.left} variants={fadeUp}>
          <span className={styles.sectionLabel}>Our Philosophy</span>
          <h2 className={styles.heading}>A House of Trust</h2>
          <p className={styles.quote}>
            &ldquo;A building should not just sit on the earth; it should belong to it. We don&rsquo;t just build structures&mdash;we cultivate living, breathing ecosystems that nurture the souls within them.&rdquo;
          </p>
          <p className={styles.body}>
            Earth Grove is a premier architectural and interior design consultancy dedicated to creating spaces that breathe, heal, and endure. By seamlessly merging the timeless principles of Vastu Shastra with modern sustainable engineering, Earth Grove crafts environments that are ecologically responsible, aesthetically profound, and energetically balanced.
          </p>
          <p className={styles.body}>
            The name reflects a sanctuary-like approach to design: <em>Earth</em> represents the foundational, sustainable materials and structural integrity, while <em>Grove</em> symbolizes organic growth, interconnected systems, and a harmonious living ecosystem.
          </p>
        </motion.div>

        {/* ── Right: floor plan image ── */}
        <motion.div className={styles.right} variants={fadeUp} custom={1}>
          <img src={floorplanImg} alt="" className={styles.bgImage} aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  )
}
