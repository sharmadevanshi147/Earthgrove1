import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styles from './Testimonials.module.css'

const TESTIMONIALS = [
  {
    id: 'dinesh',
    name: 'Dinesh Sharma',
    company: '',
    quote:
      'People build houses and these work together with us to complete it as homes. All wishes, imaginations pour in into the innovative ideas at their place accommodating ours as well. Best design.',
  },
  {
    id: 'ravi',
    name: 'Ravi',
    company: '',
    quote:
      'Accomplish work in time bound manner, my house architectural drawings were prepared nicely. Excellent in execution of innovative ideas, highly recommend.',
  },
  {
    id: 'manish',
    name: 'Manish',
    company: '',
    quote:
      'Quick and concise communicators. Explores and provides options before final design. Innovative and professional staff. Would do business with again.',
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
                  {TESTIMONIALS[active].company && (
                    <span className={styles.company}>{TESTIMONIALS[active].company}</span>
                  )}
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

            <a
              href="https://www.justdial.com/Delhi/EarthGrove-Near-Dwarka-Court-Dwarka-Sector-10/011PXX11-XX11-210521183522-W4A1_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.moreBtn}
            >
              Read More Testimonials&nbsp;&nbsp;→
            </a>
          </div>

          <span className={styles.quoteRight} aria-hidden="true">&rdquo;</span>
        </div>
      </motion.div>
    </section>
  )
}
