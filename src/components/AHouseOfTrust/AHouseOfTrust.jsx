import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import floorplanImg from '../../../Assets/Frame 148.png'
import styles from './AHouseOfTrust.module.css'

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
          <p className={styles.body}>
            We believe architecture begins with trust and is sustained through it.
            Every project we undertake is built on honest dialogue, transparent processes,
            and a deep respect for our clients&rsquo; vision and investment. From first sketch
            to final execution, we commit to clarity, reliability, and thoughtful
            decision-making, ensuring that what we design is not just aesthetically sound
            but responsibly delivered. Our firm functions as a house of trust—where ideas
            are handled with care, timelines are honored, and relationships are valued as
            much as the spaces we create.
          </p>
        </motion.div>

        {/* ── Right: placeholder image + overlaid cards ── */}
        <motion.div className={styles.right} variants={fadeUp} custom={1}>
          {/* Background image */}
          <img
            src={floorplanImg}
            alt=""
            className={styles.bgImage}
            aria-hidden="true"
          />
          {/* Dark tint overlay */}
          <div className={styles.overlay} aria-hidden="true" />

          {/* Cards */}
          <div className={styles.cards}>
            {/* Top row: Mission + Vision */}
            <div className={styles.cardsTop}>
              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>Our Mission</h3>
                <p className={styles.cardBody}>
                  Design meaningful spaces through trust, clarity, innovation, and human-centered thinking.
                </p>
              </div>
              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>Our Vision</h3>
                <p className={styles.cardBody}>
                  Shape future environments that inspire, endure, and elevate everyday experiences.
                </p>
              </div>
            </div>

            {/* Bottom row: Values (full width) */}
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>Our Values</h3>
              <p className={styles.cardBody}>
                Integrity, transparency, empathy guiding every decision. Our design meets your goals.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
