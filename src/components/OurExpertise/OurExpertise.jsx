import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './OurExpertise.module.css'

const MotionLink = motion(Link)

// span = number of columns this cell spans in the 6-col bento grid
// 4-row layout across a 6-col grid:
// Row 1: residential(4) + commercial(2)
// Row 2: temples(2) + institutional(2) + interiors(2)
// Row 3: farmhouse(2) + corporate(4)
// Row 4: vaastu(2) + walkthrough(2) + greenboard(2)
const EXPERTISE = [
  { id: 'residential',  label: 'Residential',              sub: 'Homes & Living',       span: 4, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=75' },
  { id: 'commercial',   label: 'Commercial',                sub: 'Retail & Office',      span: 2, img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=75' },
  { id: 'temples',      label: 'Temples',                   sub: 'Devotional Design',    span: 2, img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=700&q=75' },
  { id: 'institutional',label: 'Institutional',             sub: 'Education & Civic',    span: 2, img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=75' },
  { id: 'interiors',    label: 'Interiors',                 sub: 'Space & Form',         span: 2, img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=75' },
  { id: 'farmhouse',    label: 'Farmhouse',                 sub: 'Rustic & Rural',       span: 2, img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=75' },
  { id: 'corporate',    label: 'Corporate',                 sub: 'Workspace Strategy',   span: 4, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=75' },
  { id: 'vaastu',       label: 'Vaastu',                    sub: 'Sacred Geometry',      span: 2, img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=75' },
  { id: 'walkthrough',  label: '3D Walkthrough',            sub: 'Visualisation',        span: 2, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=75' },
  { id: 'greenboard',   label: 'Green Board Certification', sub: 'Sustainable Design',   span: 2, img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=75' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function OurExpertise() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="services" className={styles.section} aria-label="Our Versatile Expertise">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.sectionLabel}>What We Do</span>
        <h2 className={styles.heading}>Our Versatile Expertise</h2>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {EXPERTISE.map((item) => (
          <MotionLink
            key={item.id}
            to={`/services/${item.id}`}
            className={`${styles.cell} ${styles[`span${item.span}`]}`}
            variants={fadeIn}
          >
            <img
              src={item.img}
              alt={item.label}
              className={styles.cellImage}
              loading="lazy"
            />
            {/* Always-visible label at bottom */}
            <div className={styles.cellFooter}>
              <span className={styles.cellLabel}>{item.label}</span>
              <span className={styles.cellSub}>{item.sub}</span>
            </div>
            {/* Hover full overlay */}
            <div className={styles.cellOverlay}>
              <span className={styles.cellLabelHover}>{item.label}</span>
              <span className={styles.cellSubHover}>{item.sub}</span>
              <span className={styles.cellArrow}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </MotionLink>
        ))}
      </motion.div>
    </section>
  )
}
