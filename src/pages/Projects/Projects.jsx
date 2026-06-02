import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar    from '../../components/Navbar/Navbar'
import CTAFooter from '../../components/CTAFooter/CTAFooter'
import { PROJECTS } from '../../data/projects'
import styles    from './Projects.module.css'

/* ── Animation variants ── */
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className={styles.hero} aria-label="Our Projects">
          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className={styles.breadcrumb}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link to="/">Home</Link>
            <span className={styles.sep}> › </span>
            <span>Projects</span>
          </motion.p>
        </section>

        {/* ── 2-column project grid ── */}
        <motion.div
          ref={ref}
          className={styles.grid}
          variants={gridVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              className={styles.card}
              variants={cardVariants}
              aria-label={project.name}
            >
              {/* Image */}
              <div className={styles.cardImageWrap}>
                <img
                  src={project.image}
                  alt={project.name}
                  className={styles.cardImage}
                />
              </div>

              {/* Overlay over texture (text area only via gradient) */}
              <div className={styles.cardOverlay} aria-hidden="true" />

              {/* Text body */}
              <div className={styles.cardBody}>
                <p className={styles.cardCategory}>{project.category}</p>
                <h2 className={styles.cardTitle}>{project.name}</h2>
                <p className={styles.cardDesc}>{project.intro}</p>
                <Link to={`/projects/${project.id}`} className={styles.cardBtn}>
                  Know More &nbsp;→
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <CTAFooter showCTA={false} />
      </main>
    </>
  )
}
