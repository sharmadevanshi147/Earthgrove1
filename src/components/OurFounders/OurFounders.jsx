import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './OurFounders.module.css'

const FOUNDERS = [
  {
    id: 'aanya',
    name: 'Aanya Mehta',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    bio: 'Aanya Mehta brings a grounded, context-driven approach rooted in Indian landscapes and lived experiences. With a strong focus on spatial storytelling and user needs, she shapes warm, functional environments, fostering collaboration, trust, and a design process that prioritizes people, culture, and everyday life.',
  },
  {
    id: 'himanshi',
    name: 'Himanshi Kaushik',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80',
    bio: 'An Oxford architecture graduate, Himanshi brings global perspective and refined design sensibility. Her work balances research, material understanding, and human experience, shaping thoughtful spaces. She leads with clarity, precision, and a commitment to creating architecture that is both meaningful and enduring.',
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

export default function OurFounders() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.section} id="founders" aria-label="Our Founders">
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className={styles.headingBlock} variants={fadeUp}>
          <span className={styles.sectionLabel}>The People Behind the Vision</span>
          <h2 className={styles.heading}>Our Founders</h2>
        </motion.div>

        <motion.div className={styles.grid} variants={stagger}>
          {FOUNDERS.map((founder) => (
            <motion.div key={founder.id} className={styles.card} variants={fadeUp}>
              {/* Photo — full bleed with overlay name */}
              <div className={styles.cardImage}>
                <img src={founder.image} alt={founder.name} loading="lazy" />
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayRole}>{founder.role}</span>
                </div>
              </div>

              {/* Text body */}
              <div className={styles.cardBody}>
                <h3 className={styles.founderName}>{founder.name}</h3>
                <p className={styles.founderBio}>{founder.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp}>
          <Link to="/about" className={styles.cta}>
            More About Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
