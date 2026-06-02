import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styles from './Testimonials.module.css'

const TESTIMONIALS = [
  {
    id: 'neera',
    name: 'Neera Sharma',
    company: 'Accademy',
    quote:
      'Working with the team felt effortless. They truly listened, translated our lifestyle into design, and delivered a home that feels both functional and deeply personal. The attention to detail and transparency throughout the process built complete trust.',
  },
  {
    id: 'anil',
    name: 'Anil Kamble',
    company: 'Findr',
    quote:
      'Their ability to balance efficiency with design quality was impressive. They understood our business needs and created a workspace that enhances productivity while still feeling welcoming and thoughtfully designed. Timelines were respected without compromising execution.',
  },
  {
    id: 'mary',
    name: 'Mary Joseph',
    company: 'Bharat School of Arts',
    quote:
      'The firm brought clarity and structure to a complex project. Their collaborative approach, sensitivity to context, and strong design thinking resulted in a space that serves its purpose beautifully while leaving a lasting impact on its users.',
  },
]

const slideVariants = {
  enter:  { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0,   transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, y: -12, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
}

const INTERVAL = 5000

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(0)
    const start = performance.now()
    let rafId

    const tick = (now) => {
      const elapsed = now - start
      setProgress(Math.min(elapsed / INTERVAL, 1))
      if (elapsed < INTERVAL) {
        rafId = requestAnimationFrame(tick)
      } else {
        setActive(prev => (prev + 1) % TESTIMONIALS.length)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [active])

  return (
    <section ref={ref} className={styles.section} id="testimonials" aria-label="By The Words">
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.headingRow}>
          <span className={styles.sectionLabel}>Client Voices</span>
          <h2 className={styles.heading}>By The Words</h2>
        </div>

        <div className={styles.card}>
          {/* Large decorative quote mark behind content */}
          <div className={styles.bgQuote} aria-hidden="true">&ldquo;</div>

          {/* Opening quote mark */}
          <span className={styles.quoteLeft} aria-hidden="true">&ldquo;</span>

          <div className={styles.content}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className={styles.slide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <p className={styles.quote}>{TESTIMONIALS[active].quote}</p>
                <div className={styles.attribution}>
                  <span className={styles.name}>{TESTIMONIALS[active].name}</span>
                  <span className={styles.company}>{TESTIMONIALS[active].company}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar + dots */}
            <div className={styles.navRow}>
              <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  style={{ scaleX: progress }}
                />
              </div>
            </div>
          </div>

          <span className={styles.quoteRight} aria-hidden="true">&rdquo;</span>
        </div>
      </motion.div>
    </section>
  )
}
